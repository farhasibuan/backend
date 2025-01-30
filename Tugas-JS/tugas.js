const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Array Kosong
let menu = [];
let harga = [];


console.log(`
--=(Waroeng Wak Siwok)=--

Daftar Menu:
- (NG) Nasi Goreng - 15.000
- (AG) Ayam Geprek - 10.000
- (AB) Ayam Bakar - 12.000
- (ET) Es Teh Manis - 5.000
- (EJ) Es Jeruk Peras - 8.000
`);

const daftarOpsi = () => {
  rl.question(
    `
opsi:
1. Pesan
2. Daftar Pesanan Saya
3. Keluar
Pilih (1/2/3) : `,
    (pilihan) => {
      if (pilihan === "1") { //Jika sma dengan satu maka akan dijalankan ke halaman pesanan

        console.log("");//Memberi space untuk jarak di terminal
        
        rl.question("Masukan kode makanan : ", (kode) => { //Memesan tergantung selera kalau mau pesen ini maka makananan akan di push beserta harga nya
          if (kode === "NG") {
            menu.push("Nasi Goreng");
            harga.push(15000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (kode === "AG") {
            menu.push("Ayam Geprek");
            harga.push(10000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (kode === "AB") {
            menu.push("Ayam Bakar");
            harga.push(12000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (kode === "ET") {
            menu.push("Es Teh Manis");
            harga.push(5000);
            console.log("Pesanan berhasil ditambahkan");
          } else if (kode === "EJ") {
            menu.push("Es Jeruk Peras");
            harga.push(10000);
            console.log("Pesanan berhasil ditambahkan");
          } else {
            console.log("Kode makanan salah");
          }
          daftarOpsi();
        });

      } else if (pilihan === "2") {
        if (menu.length === 0) {
          console.log("Belum ada pesanan");
        } else {

          console.log(""); //Cuman space untuk jarak total pesanan agar mudah di baca
          

          for (let index = 0; index < menu.length; index++) {
            console.log(`${index + 1}. ${menu[index]} - ${harga[index]}`);
          }
          console.log("");
          const total = harga.reduce((a, b) => {
            return a + b;
          });
          console.log(`Total Bayar: ${total}`);
        }

        daftarOpsi();
      } else if (pilihan === "3") { //Ketika di pilih 3 maka akan logout dari halaman
        console.log("Terima kasih sudah Datang Ke Waroeng Kami...");
        rl.close();
      } else {
        console.log("Pilihan yang dimasukkan salah"); //Error ketika salah memasukkan pilihan
        daftarOpsi();
      }
    }
  );
};
daftarOpsi();