import express from "express";
import { createData, getData, findByPK, deleteData, updateData } from "./controller.js";

const router = express.Router()

router.get("/mahasiswa", getData)
router.post("/mahasiswa/create", createData)
router.get("/mahasiswa/:id", findByPK)
router.delete("/mahasiswa/:id", deleteData)
router.put("/mahasiswa/:id", updateData)
export default router

