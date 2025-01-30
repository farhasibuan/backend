 import { Electronic } from './modul.js';

 const tv = new Electronic('Televisi', 'Elektronik', 1000000);
 const laptop = new Electronic('Laptop', 'Elektronik', 2000000);

 console.log(`Nama Barang : ${tv.name}`);
 console.log(`Tipe        : ${tv.type}`);
 console.log(`Harga       : ${tv.price}\n`);

 console.log(`Nama Barang : ${laptop.name}`);
 console.log(`Tipe        : ${laptop.type}`);
 console.log(`Harga       : ${laptop.price}`);


 import { BangunDatar, BangunDatar } from './modul.js';

 const persegi = new BangunDatar("Persegi");
 persegi.hitungLuas();
 const BangunDatar = new BangunDatar("Lingkaran");
 Lingkaran.hitungLuas();