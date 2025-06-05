import { Router } from "express";
import * as healthController from '../../controllers/v1/health.controllers';
import upload from "../../middlewares/upload";




const healthRouter = Router();

healthRouter.get("/", healthController.health);
healthRouter.post("/Image", upload.single("profileImage"), healthController.Image);  // upload.single file but the name will be same as  in from input .

export default healthRouter;
