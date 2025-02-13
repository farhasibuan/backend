import express from "express";
import sequelize from "./app/utils/db_config.js";
import routerKategori from "./app/api/v1/kategori/router.js"
const app = express()
const patternAPI = "/api/v1"

app.use(express.json())
app.use(patternAPI, routerKategori)

app.listen(3000, () => {
    console.log("Server Berjalan.....")
})