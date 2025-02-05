import barang from "../model/m.js";

const getData = (req, res) => {
    res.json({
        status: 200,
        message: "Data sukses",
        data: barang
    })
}

const postData = (req, res) => {
    const{harga, namaBrang} = req.body
    const id = barang.length + 1
    const dataBaru = {
        id,
        harga,
        namaBrang
    }
    barang.push(dataBaru)
    res.json({
        status: 200,
        message: "Data sukses",
        data: barang
    })
}

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

const getDataById = (req, res) => {
    const {id} = req.params
    const data = barang.find((item) => item.id == id)
    res.json({
        status: 200,
        message: "Data sukses",
        data: data
    })
}

export {
    getData, postData, deleteData, getDataById}
