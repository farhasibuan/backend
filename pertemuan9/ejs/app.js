import express from "express"
const app = express()

//ap.use()
//Mengelola permintaan http request

//Melakukan konfigurasi middleware untuk apk
//gunakan app.set()
//ini syarat harus install ejs - npm i ejs
app.set("view engine", "ejs")


app.get("/",(req, res) => {
    res.send("<h1>Ini route /</h1>")
})

app.get("/home", (req, res) => {
    //mengakses atau menampilkan isi file
    res.render("home")
})

app.listen(4000, () => {
    console.log("Server Berjalan.....")
})