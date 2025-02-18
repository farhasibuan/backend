import { DataTypes } from "sequelize";
//Import koneksi DATABASE nya
import sequelize from '../../../utils/db_config.js'


const Kategori = sequelize.define("kategori", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_kategori: {
           
            type: DataTypes.STRING(20),
            allowNull: false,
            
            validate: {
                notEmpty: { 
                    msg: "Nama kategori tidak boleh kosong"
                },
                len: {
                    args: [4, 20],
                    msg: "Nama min 4 karakter, atau Max 20 karakter"
                }
            }
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
        
    }, {
        freezeTableName: true
    }
)


//Model.Async()
sequelize.sync();
export default Kategori