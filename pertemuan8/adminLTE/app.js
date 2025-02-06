import express  from "express"
import expressEjsLayouts from "express-ejs-layouts"
//konfigurasi pertama untuk template adminLTE yang berada di dalam direktori public
import path from "path"
import { fileURLToPath } from "url"
//cek path direktori saat ini
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "./template/parent")

//Agar file css dan Js kebaca maka gunakan express.static()
app.use(express.static(path.join(_dirname, "public")))


//default express js tidak bisa membaca langsung file css dan library js
//Oleh karena itu perlu dilakukan terlebih dahulu konfigurasi
//agar file css dan js yang ada di dalam folder public dapat terbaca di semua file
//yg ada di dalam projek

app.get("/", (req, res) => {
    res.send("Ini route / (utama)")
})

app.get("/dashboard", (req, res) => {
    res.render("template/parent")
})

app.listen(5000, () => {
    console.log("Server Berjalan.....")
})