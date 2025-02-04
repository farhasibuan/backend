//Controller = jembatan antara model dengan view 

//isinya :
//1. respon json
//2. Validasi 
//3. Logika lainnya


//isi nya fungsi fungsi mengelola data produk

import dataProduk from "../model/produk.js";

const getAll = (req, res) => {
    res.json({
        status: 200,
        message: "Data Produk",
        data: dataProduk
        
    })
}

const editData = (req, res) => {
    res.json({
        status: 200,
        message: "Data Produk",
        data: "DataProduk"
    })
}

export {getAll, editData}

//fungsi :
//1. Menghapus,
//2. Melihat data berdasarkan index
//3. Logika lainnya (Termasuk validasi)