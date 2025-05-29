import { api } from "@/lib/axios";
import { Car } from "@/types/car";

export const fetchCars = async (): Promise<Car[]> => {
  const res = await api.get("/cars");
console.log(res.data)
  return res.data.allcars;
};

export const postCar = async (newCar:Car) => {
  const res = await api.post("/newcar", newCar);

  return res.data.newAddCar;
};

export const deleteCar=async(id:string)=>{
  const res=await api.delete(`/car/${id}`);
    console.log(res.data.DeleteCar)
  return res.data.DeleteCar;


}

export const fetchCarById=async (id:string)=>{
  const res= await api.get(`/car/${id}`);
  console.log(res.data.car)
  return res.data.car;
}


// const updateCar=async (id:string,updatedCar:Omit<Car,"id">)=>{
//   const res=await api.put(`/car/${id}`,updatedCar);
//   return res.data.car;
// }

