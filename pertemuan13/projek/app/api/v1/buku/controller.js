import  { modelBuku, modelKategori } from "../models/relasi.js";
import {check, validationResult} from "express-validator"

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
    .not().isEmpty().withMessage(" tidak boleh kosong")
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
        const tambah = await modelBuku.create({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi
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

export {
    getData,
    createData,
    validasi
}