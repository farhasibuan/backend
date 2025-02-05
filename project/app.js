import express from "express";
import routeBarang from "./route/r.js";

const app = express()
app.use(express.json())

app.use('/barang', routeBarang)


app.listen(3000, () => {
    console.log("Server Berjalan.....")
})