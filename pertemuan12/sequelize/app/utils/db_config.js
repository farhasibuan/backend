//ini file koneksi database nya

import { Sequelize } from "sequelize";
import dotenv from "dotenv"

//Jika ingin menggunakan isi file .env maka cantumkan kode di bawah ini
dotenv.config()


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
  })

export default sequelize