//import semua tabel yang berhubungan/relasi
import modelBuku from "../buku/model.js";
import modelKategori from "../kategori/model.js"

//definisikan hubungan antar tabel tersebut
//hasOne ? Digunakan ketika satu entitas memiliki satu entitas lain.

//hasMany ? Digunakan ketika satu entitas memiliki banyak entitas lain.

//belongsTo ? Digunakan di model yang menyimpan foreign key untuk menunjukkan bahwa ia milik model lain

// modelKategori.hasMany(modelBuku)
modelBuku.belongsTo(modelKategori, {foreignKey: "kategori_id"})
modelKategori.hasMany(modelBuku, { foreignKey: "kategori_id" });

export { modelBuku, modelKategori }