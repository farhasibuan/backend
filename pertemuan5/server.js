import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send('P, Ngantuk')
})

app.get('/jsonString', (req, res) => {
    res.send({
        status: 200,
        message: "Succesfull"
    })
})

app.get('/json',(req, res) => {
    res.json({
        status:201,
        message: "Data Succesfull Loaded",
        data : {
            id: 1,
            name: "Zaffar",
            age: 20
        }
    })
})

//Quiz
// app.get('/getData/:id', (req, res) => {
// const id = parseInt(req.params.id, 4
// ); // 

//     if (id === 1) {
//         res.json({
//             status: 200,
//             message: "Success",
//             data: {
//                 id: id,
//                 name: "Zaffar",
//                 age: 20
//             }
//         });
//     } else if (id === 2) {
//         res.status(400).json({
//             status: 400,
//             message: "Gagal"
//         });
//     } else if (id === 3) {
//         res.status(404).json({
//             status: 404,
//             message: "Kosong"
//         });
//     }
// });

app.get('/getData/:id', (req, res) => {
    let dataMahasantri = [
        { id: 1, name: "Zaffar", age: 20 },
        { id: 2, name: "Ngantuk", age: 100 },
        { id: 3, name: "Pache", age: 20 },
    ]
    const {id} = req.params;
    if (!id) {
        res.json({
            status: 404,
            message: "Data Kosong",
            data: dataMahasantri
        })
    }
    const datasantri = dataMahasantri.find((element) => element.id == id)
    if (!datasantri) {
        res.json({
            status: 200,
            message: "Data Kosong"
        })
        return;
    }
    res.json({
        status: 200,
        message: "Data",
        data: datasantri
    })
})


//Mengambil data secara dinamis melalui Url
//Menggunakan Params
app.get('/json/:nama/:umur/:alamat', (req, res) => {
    const { nama, umur, alamat } = req.params;
    res.json({
        data: {
            nama,
            umur,
            alamat,
        }
    });
});

app.get('/getData', (req, res) => {
    let data = [
        { id: 1, nama: "Zaffar", age: "10" },
        { id: 2, nama: "Ngantuk", age: "100" },
        { id: 3, nama: "Pache", age: "20" },
    ]
    res.json({
        status: 200,
        message: "Data Loaded",
        data: dataMahansantri
    })
})


//Jalanlan server nya
app.listen(3000, () => {
    console.log("Server berjalan");
})