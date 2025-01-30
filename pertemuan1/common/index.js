// const modul = require('./app.js')
// console.log(modul.a);
// console.log(modul.tambah());


// ini cara penggunakan local module menggunakan commonJS
const data = require('./app.js');

// Memisahkan data berdasarkan gender
const lakiLaki = data.filter(person => person.gender === 'l');
const perempuan = data.filter(person => person.gender === 'p');

// Menampilkan output
console.log(`Jumlah peserta: ${data.length}`);
console.log(`Laki-laki: ${lakiLaki.length}`);
lakiLaki.forEach(person => console.log(person.nama));
console.log(`Perempuan: ${perempuan.length}`);
perempuan.forEach(person => console.log(person.nama));

