//controller itu adalah fungsi" untuk menampilkan di HTTP

import modelMahasiswa from "./model.js";


//fungsi ini digunakan untuk menampilkan data mahasiswa
const getData = async (req, res) => {
    try {
        //ini hasilnya sama kaya SELECT * FROM 
        const mahasiswa = await modelMahasiswa.findAll()
        //Buat respon JSON Nya
        res.json({
            status: 200,
            message: "Data mahasiswa",
            data: mahasiswa
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })        
    }
}

//Ini insert into
const createData = async (req, res) => {
    try {
        //ini perlu menangkap req.body
        const {nama} = req.body
        const tambah = await modelMahasiswa.create(
            {nama}
        )
        res.json({
            status: 201,
            message: "Data berhasil ditambahkan",
            data: tambah
        })
    } catch (error) {
        res.json({
            status: 400,
            message: error.message
        })    
    }
} 

//GetByPK
const findByPK = async (req, res) => {
    //butuh req.params untuk mendapatkan id data yang dimaksud
    try {
        const idCari = req.params.id
        const mahasiswaId = await modelMahasiswa.findByPk(idCari)
        res.json({
            status: 200,
            message: "Data mahasiswa",
            data: mahasiswaId
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    } 

}

//Delete
const deleteData = async (req, res) => {
    try {
        const idCari = req.params.id
        await modelMahasiswa.destroy({
            where: {
                id: idCari
            }
        })
        res.json({
            status: 200,
            message: "Data berhasil dihapus"
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })
    }
}


//update - perlu ID
const updateData = async (req, res) => {
    try {
        const nama = req.body.nama
        const idCari = req.params.id
        //respon JSON tidak akan di tampilkan jika await nya
        //belum selesai prosesnya
        //karena await mengembalikan sebuah PROMISE 
        await modelMahasiswa.update(
            {
                nama
            }, {
                where: {
                    id: idCari
                },
            },
        )
        res.json({
            status: 200,
            message: "Data berhasil di ubah"
        })
    } catch (error) {
        res.json({
            status: 200,
            message: error.message
        })
    }
}

export {
    getData, createData, findByPK, deleteData, updateData
}
