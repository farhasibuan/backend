import express from "express";
import routeBarang from "./route/r.js";

const app = express() //membuat istence app express untuk menanganin riquest

app.use(express.json()) //memungkinkan express untuk membaca dalam format json

app.use('/barang', routeBarang) //Semua request yang diawali dengan /barang akan diarahkan ke routeBarang, 
// yaitu router yang didefinisikan di ./route/r.js.


//kemudia Routebarang yang di use itu akan mengarah ke import routeBarang
//yang di mana dia akan masuk ke folder route dan akan menjalankan isi nya


app.listen(3000, () => {
    console.log("Server Berjalan.....")
})