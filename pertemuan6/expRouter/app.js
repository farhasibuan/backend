import express from "express";
import routerProduk from "./route/produk.js"

const app = express()

//cara menggunakan router hasil import
//maka daoar menggunakan app level middleware
app.use("/produk", routerProduk)

app.listen(3000, () => {
    console.log("Server Berjalan.....")
})