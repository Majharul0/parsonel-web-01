import express from "express";
import massageSend from "../controller/massage-cntroller"
const router = express.Router();

router.post("/contact",  massageSend)

export default router;