import { Request, Response } from "express";
import cars from "../Modal/carModal";
import { CarData } from "../Types/types";



 export async function AllCars(req: Request, res: Response): Promise<void> {
  try {
    const car = await cars.find();
    res.status(200).json({ allcars: car });
  } catch (error) {
    console.log("Error fetching all cars");
    res.status(500).json({ error: error });
  }
}

 export async function AddNewCar(req: Request, res: Response): Promise<void> {
  const data = req.body;

  try {
    const car:CarData = await cars.create({
      name: data.name,
      model: data.model,
      year: data.year,
      price: data.price,
      color: data.color,
    });

    res.status(200).json({ message: "Car added successfully", newAddCar: car });
  } catch (error) {
    console.log("Error adding new car", error);
    res.status(500).json({ error: error });
  }
}

export async function GetCarById(req:Request, res:Response):Promise<void>{

    const data=req.params.id;
    try{
        const car=await cars.findById(data)
        if(!car){
            res.status(404).json({message:"Car not found"})
        }
    

        res.status(200).json({car:car })
    }
    catch(error){
        console.log("Error fetching car by id",error)
        res.status(500).json({error:error})
    }
}

export async function Deletecar(req:Request, res:Response):Promise<void>{

    const data=req.params.id
    try{
      const car=  await cars.findByIdAndDelete(data)
      res.status(200).json({message:"Car deleted successfully", DeleteCar:car})
    }
    catch(error){
        console.log("Error deleting car",error)
        res.status(500).json({error:error})
    }
}

export async function UpdateCar(req:Request, res:Response):Promise<void>{

    const data=req.body
    try{
        const car=await cars.findByIdAndUpdate(data.id, data, {new:true})

        if(!car){
            res.status(404).json({message:"Car not found"})
        }
        res.status(200).json({message:"Car updated successfully", UpdateCar:car})
}
    catch(error){
        console.log("Error updating car",error)
        res.status(500).json({error:error})
    }

}