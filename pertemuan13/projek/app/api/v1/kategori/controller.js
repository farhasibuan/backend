//controller itu adalah fungsi" untuk menampilkan di HTTP

import modelKategori from "./model.js";


//fungsi ini digunakan untuk menampilkan data kategori
const getData = async (req, res) => {
    try {
        //ini hasilnya sama kaya SELECT * FROM 
        const kategori = await modelKategori.findAll()
        //Buat respon JSON Nya
        res.json({
            status: 200,
            message: "Data kategori",
            data: kategori
        })
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        })        
    }
}

//Ini insert into
const createData = async (req, res) => {
    try {
        const { nama_kategori } = req.body;

        if (!nama_kategori) {
            return res.status(400).json({
                status: 400,
                message: "Nama tidak boleh kosong"
            });
        }

        // Cek apakah kategori sudah ada
        const katgor = await modelKategori.findOne({
            where: { nama_kategori }
        });

        if (katgor) {
            return res.status(400).json({
                status: 400,
                message: "Nama kategori sudah ada"
            });
        }

        // Tambah kategori baru
        const tambah = await modelKategori.create({ nama_kategori });

        res.status(200).json({
            status: 200,
            message: "Data berhasil ditambahkan",
            data: tambah
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};


//GetByPK
const findByPK = async (req, res) => {
    try {
        const idCari = req.params.id;

        // Validasi: Pastikan ID diberikan
        if (!idCari) {
            return res.status(400).json({
                status: 400,
                message: "ID harus diisi"
            });
        }

        // Cari kategori berdasarkan primary key
        const kategoriId = await modelKategori.findByPk(idCari);

        // Jika kategori tidak ditemukan
        if (!kategoriId) {
            return res.status(404).json({
                status: 404,
                message: "Kategori tidak ditemukan"
            });
        }

        // Berhasil mendapatkan data
        return res.status(200).json({
            status: 200,
            message: "Data kategori ditemukan",
            data: kategoriId
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};


//Delete
const deleteData = async (req, res) => {
    try {
        const idCari = req.params.id;

        // Validasi: Pastikan ID diberikan
        if (!idCari) {
            return res.status(400).json({
                status: 400,
                message: "ID harus diisi"
            });
        }

        // Cek apakah data dengan ID tersebut ada
        const kategori = await modelKategori.findByPk(idCari);
        if (!kategori) {
            return res.status(404).json({
                status: 404,
                message: "Kategori tidak ditemukan"
            });
        }

        // Hapus data jika ditemukan
        await modelKategori.destroy({
            where: { id: idCari }
        });

        res.status(200).json({
            status: 200,
            message: "Data berhasil dihapus"
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};



//update - perlu ID
const updateData = async (req, res) => {
    try {
        const { nama_kategori } = req.body;
        const idCari = req.params.id;

        // Validasi: Pastikan ID diberikan
        if (!idCari) {
            return res.status(400).json({
                status: 400,
                message: "ID harus diisi"
            });
        }

        // Validasi: Pastikan nama_kategori diberikan
        if (!nama_kategori) {
            return res.status(400).json({
                status: 400,
                message: "Nama kategori tidak boleh kosong"
            });
        }

        // Cek apakah data dengan ID tersebut ada
        const kategori = await modelKategori.findByPk(idCari);
        if (!kategori) {
            return res.status(404).json({
                status: 404,
                message: "Kategori tidak ditemukan"
            });
        }

        // Update data jika ditemukan
        await modelKategori.update(
            { nama_kategori },
            { where: { id: idCari } }
        );

        res.status(200).json({
            status: 200,
            message: "Data berhasil diubah"
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};


export {
    getData, createData, findByPK, deleteData, updateData
}
