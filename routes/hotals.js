const express = require("express")
const router = express.Router()
import { createhotal } from "../controller/Hotal"



router.post("/",createhotal)