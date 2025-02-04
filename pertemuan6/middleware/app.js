import express from "express";
const app = express();
const PORT = 3000
//app level middleware
app.use(express.json())
app.get('/', (req, res) => {
    res.json({
        message: "Ini Jalur utama"
    })
})

let user = [
    { id: 1, name: "Zaffar", age: 20 },
    { id: 2, name: "Ngantuk", age: 100 },
    { id: 3, name: "Pache", age: 20 }
]
app.get("/user",(req, res) => {
    res.json({
        status: 200,
        message: "success Full",
        data: user
    })
})

//atau input user == number
const validasi = (req, res, next) => {
    const {nama, usia} = req.body
    if(!nama || typeof (nama) !== "string") {
        res.status(400).json({
            message: "Nama harus di isi/berupa string"
        })
    }else if (!usia || typeof (usia) !== "number") {
        res.status(400).json({
            message: "Usia harus di isi/berupa number"
        })
    }

    next()
}

//simulasi buat jalur POST 
//merima kiriman data dari client
//route level middleware

app.post("/user", validasi, (req, res) => {
    //buat destructuring dari inputan user
    const { nama, usia } = req.body
    res.json({
        status: 200,
        message: "OK",
        data: {
            nama,
            usia
        }
    })
})



//membuat fungsi middlewer
//untuk memeriksa parameter yang d url harus berupa angka
const cekParam = (req, res, next) => {
    const cekId  = req.params.id
    if(isNaN(cekId)) {
        res.status(404).json({
            message: "Inputan tidak sesuai"
        })
    } else {
        //next ini digunakan untuk mengambul respon dari res.json 
        // yang ada di rute/jalur app.get("user/:id")
        next()
    }s
    next()
}

app.get("/user/:id", cekParam,(req, res) => {
    const id = req.params.id
       //Buatcek data
    // console.log(typeof id);
    
    const dataUser = user.find((element) => element.id == id)
    //buatcek data
    // console.log(typeof dataUser);
    
    if (dataUser !== 0) {
        res.json({
            status: 200,
            message: "success",
            data: dataUser
        })
    }
})

const login = (req, res, next) => {
    const { username, password } = req.body;
    

    const validUser = {
        username: "admin123",
        password: "admin123"
    };
    
    if (!username || !password) {
        return res.status(400).json({
            status: 200,
            message: "Username dan password harus diisi"
        });
    }
    
    if (username !== validUser.username || password !== validUser.password) {
        return res.status(401).json({
            status: 401,
            message: "Anda gagal login"
        });
    }
    
    next();
};

app.post("/login", login, (req, res) => {
    res.json({
        status: 200,
        message: "Login berhasil",
        user: req.body.username
    });
});


//Jalankan server
app.listen(PORT, () => {
    console.log("Server is running")
})