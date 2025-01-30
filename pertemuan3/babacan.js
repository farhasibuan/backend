//inisialisasi core module readline nya
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Buat varivael arrar kosong untuk menamopung data pesanan dan daftar harga
let daftarPesan = []
let daftarHarga = []
// buat fungsi untuk menampilkan daftar menu makanan
const tampilMenu = () => {
console.log(`
--=(Waroeng BABACHAN)=--

Daftar Menu:
- (NG) Nasi Goreng - 15.000
- (AG) Ayam Geprek - 10.000
- (AB) Ayam Bakar - 12.000
- (ET) Es Teh Manis - 5.000
- (EJ) Es Jeruk Peras - 8.000`
    );

}

//bikin fungsi untuk menampilkan pilihan aksi didalam aplikasi nya
const pilihAksi = () => {
    console.log(`Opsi:
1. Pesan
2. Daftar Pesanan Saya
3. Keluar
`);
    rl.question("Pilih (1/2/3) : ", (opsi) => {
        //buat kondisi kalau inputan user 1/2/3 maka akan dijalankan
        switch (opsi) {
            case "1":
                    //Ngapain ?
                    //melakukan pemesanan
                break;
            case "2":
                    //Melihat daftar pesaan
                break;
            case "3":
                    //keluar program
                    keluarProgram();
                break;
        
            default:
                //dibalikin lagi ke tampilan opsi
                console.log("kode yang di masukkan salah");
                
                pilihAksi();
                break;
        }
})
}

//>=========================================================

const pesanan =  () => {
    // console.log("Ini fungsi pesan");
   rl.question("Masukan kode makanan : ", (kode) => {
       if (kode.toLocaleLowerCase() === "ng" || kode.toLocaleUpperCase() === "NG") {
        //ngepush array kosong
       } else if (kode.toLocaleLowerCase() === "ag" || kode.toLocaleUpperCase() === "AG") {
        //ngepush array kosong
       }
        
   })
    
}

const daftarPesanan = () => {
    // console.log("Ini fungsi daftar pesanan");
    if (daftarPesan.length === 0) {
        console.log("Belum ada pesanan");
    } else {
        //ini ada pesanan
        for (let index = 0; index < daftarPesan.length; index++) {
            console.log(`${index++}.${daftarPesan[index]} - ${daftarHarga[index]}`);
        }

        let totalBayar = daftarHarga.reduce((total, harga) => total + harga, 0);
        return total + harga 
    }
    console.log("Total bayar : " + totalBayar);
    
}

const keluarProgram = () => {
    console.log("Terimakasih anda sudah berkunjung ke waroeng kami");
    rl.close();
}
tampilMenu();
pilihAksi();