import express  from "express"
import expressEjsLayouts from "express-ejs-layouts"
//konfigurasi pertama untuk template adminLTE yang berada di dalam direktori public
import path from "path"
import { fileURLToPath } from "url"
import routeBarang from "./api/v1/barang/r.js" 
//cek path direktori saat ini
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "template/parent")
app.use("/dashboard", routeBarang)

//Agar file css dan Js kebaca maka gunakan express.static()
app.use(express.static(path.join(_dirname, "public")))


//default express js tidak bisa membaca langsung file css dan library js
//Oleh karena itu perlu dilakukan terlebih dahulu konfigurasi
//agar file css dan js yang ada di dalam folder public dapat terbaca di semua file
//yg ada di dalam projek

 //Semua request yang diawali dengan /barang akan diarahkan ke routeBarang,

 app.listen(3000, () => {
    console.log("Server Berjalan.....")
})