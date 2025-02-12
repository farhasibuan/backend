import express from "express";
import sequelize from "./app/utils/db_config.js";
import routerMahasiswa from "./app/api/v1/mahasiswa/router.js"
const app = express()
const patternAPI = "/api/v1"
//Cek koneksi DB
// app.get("/", async (req, res) => {
//     //Kalau kondisi benar maka try dijalankan
//     //kalau salah maka catch dijalankan
//     try {
//         await sequelize.authenticate()
//         console.log("Koneksi DB Berhasil");
        
//     } catch (error) {
//         console.log(error);
//     }
// })
app.use(express.json())
app.use(patternAPI, routerMahasiswa)

app.listen(3000, () => {
    console.log("Server Berjalan.....")
})