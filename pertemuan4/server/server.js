import http from "http";
//Port 3000 itu tidak ada yang punya
//Dan umum digunakan untuk proes ujicoba server
const PORT = 3000;

const server = http.createServer((req, res) => {
  //tentukan response tipe header (data yang mau dikirim)
  //pakai res.writeHead(HTTP_RESPON_CODE,{tipe datanya apa})
  //ini kalau JSON
  //res.writeHead(200, { "Content-Type": "application/json" });
  //tampilkan datanya dan hentikan requestnya
  //JSON.Stringify digunakan untuk mengubah object js menjadi string JSON
  //   res.end(
  //     JSON.stringify({
  //       data: "Hello World!",
  //     })
  //   );
  //ini kalo text plain
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Ini dari server Node.js");
  // ini kalo html
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1>Ini dari server Node.js</h1>");
  //   res.writeHead = hanya digunakan untuk menentukan enis header (data) saja
  //   tidak bisa digunakan untuk mengirim atau menulis data
  //   res.end = digunakan untuk mengakhiri permintaan dan dapat digunakan untuk mengirim data
  //   res.write = digunakan untuk menulis dan mengirim data
  //jadi penulisannya kaya gini
  //1. res.writeHead
  //2. res.write
  //3. res.end
});

//jalankan servernya
//versi1
// server.listen(3000);
//versi2
server.listen(PORT, () => {
  console.log(`Server dijalankan pada port ${PORT}`);
});

// fetch("http://localhost:3000")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
