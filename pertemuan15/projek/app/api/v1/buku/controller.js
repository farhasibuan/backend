import  { modelBuku, modelKategori } from "../models/relasi.js";
import {check, validationResult} from "express-validator"
import path from "path"
import fs from "fs/promises"

const getData =  async (req, res) => {
    try {
        const buku = await modelBuku.findAll({
            include: {
                model: modelKategori,
                attributes: ["nama_kategori"],
              },
        })
        res.json({
            status: 200,
            message: "Data buku",
            data: buku
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}

//buat variabel validasi
//nantinya variabel ini akan digunakan sebagai router level middleware
const validasi = [
    check("judul_buku")
    //ini validasi tidak boleh kosong/mengirim string kosong
    .not().isEmpty().withMessage("Judul buku tidak boleh kosong")
    //validasi membatasi string
    .isLength({min:5}).withMessage("Judul buku minimal 3 karakter")
    //custom error validasi unique
    .custom(async(value) => {
        // const sama = await modelBuku.findOne({
        //     where: {
        //         judul_buku: req.body.judul_buku
        //     }    
        // })
        // if (sama) {
        //     return Promise.reject("Judul buku sudah ada coba yang lain")
        // }
        // return true
        
        return await modelBuku.findOne({
            where: {
                judul_buku: value
            }
        }).then((data) => {
            if (data) {
                return Promise.reject("Judul buku sudah ada coba yang lain")
            }
        })

    }), 
    
    //validasi field kategori_id
    check("kategori_id")
    .not().isEmpty().withMessage("Kategori tidak boleh kosong"),
    check("kategori_id")
    .not().isEmpty().withMessage("Penulis tidak boleh kosong"),
    check("kategori_id")
    .not().isEmpty().withMessage("Deskripsi tidak boleh kosong"),
    check("sampul")
    .custom(async(value, {req}) => {
        if (!req.file) {
            throw new Error("Gambar tidak boleh kosong")
        }
    })
]

const createData = async ( req, res) => {
    try {

        // const sama = await modelBuku.findOne({
        //     where: {
        //         judul_buku: req.body.judul_buku
        //     }
        // })
        // if (sama) {
        //     return res.status(400).json({message: "Judul buku sudah ada coba yang lain"})
        // }

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({message: error.array()})
        }

        const { judul_buku, kategori_id, penulis, deskripsi } = req.body
        const sampulBuku = req.file.filename

        const tambah = await modelBuku.create({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi,
            sampul: sampulBuku
        })

        res.json ({
            status:201,
            message: "Data berhasil di tambah",
            data: tambah
        })
    } catch ( error) {
        res.status(400).json({message: error.message})
    }
}

const findData = async (req, res) => {
    try {
        const id = req.params.id
        const hasil = modelBuku.findOne({
            where: {
                id: id
            },
            include: {
                model: modelKategori,
                attributes: ["nama_kategori"]
            }
        })
        res.status(200).json({
            message: "Data buku",
            data: hasil
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const updateData = async (req, res) => {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({
                message: error.array()
            })
        }

        const id = req.params.id
        const updateId = await modelBuku.findByPk(id)
        let gambar = ""

        if (!req.file) {
            gambar = updateId.sampul
        } else if (!req.file && updateId.sampul) {
            gambar = "";
        } else {
            const pathFile = path.resolve('./app/public/uploads/' + updateId.sampul)
            if (updateId.sampul) {
                fs.unlink(pathFile)
            }
            updateId.sampul = req.file.filename
            gambar = req.file.filename
        }

        const { judul_buku, kategori_id, penulis, deskripsi } = req.body

        const ubah = await modelBuku.update({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi,
            sampul: gambar
        }, {
            where: {
                id
            }
        })

        res.json({
            status: 201,
            message: "Data berhasil di ubah",
            data: ubah
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })
    }
}



export {
    getData,
    createData,
    validasi,
    findData,
    updateData
}