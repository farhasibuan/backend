import barang from "./m.js"; //meminta dari folder model lalu ke file m.js


const tampilData = (req, res) => {
    res.render("template/parent" , {barang : barang})
}

//Ini untuk menampilkan semua data
const getData = (req, res) => {
    res.json({
        status: 200,
        message: "Data sukses",
        data: barang
    })
}

//Ini untuk menambahkan data baru
const postData = (req, res) => {
    const{harga, namaBrang} = req.body //mengambil data dari req body,dan akan di kirim kan berbentuk JSON
    const id = barang.length + 1
    const dataBaru = {
        id,
        harga,
        namaBrang
    }
    barang.push(dataBaru)
    res.json({
        status: 201,
        message: "Data sukses di tambah" 
    })
}


//Ini untuk menghapus data
const deleteData = (req, res) => {
    const {id} = req.params
    const index = barang.findIndex((item) => item.id == id)
    barang.splice(index, 1)
    res.json({
        status: 200,
        message: "Data sukses",
        data: barang
    })
}


//Ini untuk menampilkan data berdasarkan id
const getDataById = (req, res) => {
    const {id} = req.params //mengambil id dari parameter URL
    const data = barang.find((item) => item.id == id) //find digunakan untuk mencari 1 item atau id yang sesuai dengan yang kita inginkan
    
    if (!data) {
        res.status(404).json({
            status: 404,
            message: "Data tidak ditemukan"
        })
    } else {
        res.json({
            status: 200,
            message: "Ini datanya",
            data
        })
    }
}

export {
    tampilData} //Digunakan untuk mengekspor beberapa nilai dari file yang sama. atau banyak

