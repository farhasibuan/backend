import express from "express";
import { tampilData } from "./c.js";

const router = express.Router();

router.get("/", tampilData);


export default router;
