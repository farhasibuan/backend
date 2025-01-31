import http from "http"

//simulasi server public
//pakai API public
const url = "https://jsonplaceholder.typicode.com/users"
const request = http.request(url, (res) => {
    //Event res.on
    // res.on untuk mengambil datanya
    //2.end = untuk menutup request
    //3.error = kalau misal koneksi terputus
    //4.write = untuk mnulis data (Biasanya ini digunakan untuk method POST)

    // ambil data response nya
    res.on("data", (TangkapData) => {
    //data pada parameter TangkapData masih berupa buffer
    //oleh karna itu harus di parsing dulu pakai .toString()
        // console.log(toString());
        hasil += TangkapData
        console.log(hasil.toString());    
        
    })

    res.on("error", (err) => {
        console.error(error.message);
        
    })

    res.on("end", () => {
      console.log("Permintaan slesai");
      
    })
})

//tutup request
request.end()