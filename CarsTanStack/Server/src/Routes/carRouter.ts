import express from "express";
import {AllCars, AddNewCar,Deletecar,UpdateCar,GetCarById} from "../Controllers/carController";

const router = express.Router();

router.get("/cars", AllCars);
router.post("/newcar", AddNewCar);
router.get("/car/:id", GetCarById);
router.put("/car/:id", UpdateCar);
router.delete("/car/:id", Deletecar);
    
export default router;
