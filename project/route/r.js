import express from "express";
import { getData, getDataById, postData, deleteData } from "../controller/c.js";
import mid from "../middleware/mid.js";
const router = express.Router()

router.get('/data', getData)
router.get('/data/:id', getDataById)
router.post('/data',mid, postData)
router.delete('/data/:id', deleteData)



export default router