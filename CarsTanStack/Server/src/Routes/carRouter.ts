import express from "express";
import {AllCars, AddNewCar,Deletecar,UpdateCar,GetCarById} from "../Controllers/carController";
const router = express.Router();
import { authMiddleware } from "../Middlewares/AuthMiddlerware";

router.get("/cars",authMiddleware, AllCars);
router.post("/newcar", authMiddleware,AddNewCar);
router.get("/car/:id",authMiddleware, GetCarById);
router.put("/car/:id", authMiddleware,UpdateCar);
router.delete("/car/:id",authMiddleware, Deletecar);
    
export default router;
