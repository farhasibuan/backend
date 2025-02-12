import { DataTypes } from "sequelize";
//Import koneksi DATABASE nya
import sequelize from '../../../utils/db_config.js'

//Definisikan nama tabel beserta field didalamnya
const Mahasiswa = sequelize.define("mahasiswa", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama: {
            //Data Types String akan menjadi varchar(99)
            //DataTypes akan menjadi varchar(255)
            type: DataTypes.STRING(99),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        
    }
)


//Model.Async()
sequelize.sync();
export default Mahasiswa