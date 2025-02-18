import express from "express";
import { getData, createData, validasi, updateData } from "./controller.js"
import uploadImage from "../middleware/uploadimage.js";


const router = express.Router()

router.get("/buku", getData)
router.post("/buku/create", uploadImage.single("sampul"), validasi, createData)
router.put("/buku/update/:id", uploadImage.single("sampul"), validasi, updateData)
// router.get("buku/:id", findData)

export default router