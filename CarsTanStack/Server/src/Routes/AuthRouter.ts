import express from "express"
import {SignUp, SignIn} from "../Controllers/AuthController"
const router=express.Router()


router.post("/signup",SignUp)
router.post("/signin",SignIn)


export default  router      