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
}
    next()
}

export default oman