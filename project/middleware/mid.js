//middleware digunakan untuk validasi atau autentifikasi pada permintaan post
const oman = (req, res, next) => {
    const {harga, namaBrang} = req.body
//    kalo datanya kosong
    if(!harga || !namaBrang){
        return res.status(400).json({
            status: 400,
            message: "Data tidak boleh kosong"
        })

} else if (typeof harga !== "number") {
    return res.status(400).json({
        status: 400,
        message: "Harga harus angka"
    })
}else if (typeof namaBrang !== "string") {
    return res.status(400).json({
        status: 400,
        message: "Nama barang harus string"
    })
}

    next()
}

export default oman  //Digunakan ketika kita ingin mengekspor satu nilai utama dari suatu file.