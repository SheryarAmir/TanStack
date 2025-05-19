import axios from 'axios';

export type Car = {
  id: number;
  name: string;
  model: string;
  year: number;
  price: number;
  color: string;
};

export type NewCar = Omit<Car, "id">;

export const fetchCars = async (): Promise<Car[]> => {
  const res = await axios.get("http://localhost:9000/cars");
  console.log(res.data);

  if (res.status !== 200) {
    throw new Error("Error fetching cars");
  }

  return res.data.allcars; 
};

export const postCar = async (newCar: NewCar): Promise<Car> => {
  const res = await axios.post("http://localhost:9000/newcar", newCar, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data.newAddCar; 
};
