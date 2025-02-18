import express from "express";
import { getData, getDataById, postData, deleteData } from "../controller/c.js"; //FUngsi yang menanganangin berbagi permintaan
import mid from "../middleware/mid.js";

const router = express.Router() //Istence

router.get('/data', getData) //Ketika ada permintaan GET ke /data, fungsi getData akan dijalankan.
router.get('/data/:id', getDataById)
router.post('/data',mid, postData)
router.delete('/data/:id', deleteData)



export default router //Digunakan ketika kita ingin mengekspor satu nilai utama dari suatu file.