//SIMULASI
//fle ini digunakan untuk mendifinisikan route
//untuk mengelola tabel produk menggunakan proses CRUD

import express from "express";
const router = express.Router();
//impor controllernya
import { getAll, editData } from "../controller/produk.js"

//
//Buat variabel untuk express route nya
// import dataProduk from "../model/produk.js";
// const router = express.Router();

//Definisikan secara lengkap alur CRUD nya
//get,post,put,delete


//untuk buat variabel untuk express route nya
router.get("/", getAll)


// router.get("/", (req, res) => {
//     res.json({
//         status: 200,    
//         message: "Data Produk",
//         data: {
//             produk: dataProduk
//         }
//     })
// })

// router.get("/edit/:id", (req, res) => {
//     const { id } = req.params.id
//     res.json({
//         status: 200,    
//         message: "Data Produk",
//         data: {
//             id,
//         }
//     })
// })

export default router