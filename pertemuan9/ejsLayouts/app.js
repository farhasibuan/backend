import express from "express"
//Ini import module templating punya ejs
import expressEjsLayouts from "express-ejs-layouts"

const app = express()
app.set("view engine", "ejs")
//Tambahkan module templating ejs ke app middleware
app.use(expressEjsLayouts)
app.set("layout", "./template/parent")

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/dashboard", (req, res) => {
    res.render("dashboard")
    app
})


app.listen(3000, () => {
    console.log("Server Berjalan.....")
})