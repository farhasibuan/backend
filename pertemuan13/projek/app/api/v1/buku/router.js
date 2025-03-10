import express from "express";
import { getData, createData, validasi } from "./controller.js"


const router = express.Router()

router.get("/buku", getData)
router.post("/buku/create", validasi, createData)

export default router