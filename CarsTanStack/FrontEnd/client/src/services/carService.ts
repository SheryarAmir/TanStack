import { api } from "@/lib/axios";
import { Car } from "@/types/car";

export const fetchCars = async (): Promise<Car[]> => {
  const res = await api.get("/cars");
  return res.data.allcars;
};

export const postCar = async (newCar: Omit<Car, "id">) => {
  const res = await api.post("/newcar", newCar);
  return res.data.newAddCar;
};
