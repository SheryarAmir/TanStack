import express from "express";
import {AllCars, AddNewCar,Deletecar,UpdateCar,GetCarById} from "../Controllers/carController";
const router = express.Router();
import { authMiddleware } from "../Middlewares/AuthMiddlerware";

router.get("/cars",authMiddleware , AllCars);
router.post("/newcar",AddNewCar);
router.get("/car/:id", GetCarById);
router.put("/car/:id",UpdateCar);
router.delete("/car/:id", Deletecar);
    
export default router;
