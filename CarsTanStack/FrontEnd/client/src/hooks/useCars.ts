
import { useQuery } from "@tanstack/react-query"
import { fetchCars, postCar,deleteCar,fetchCarById } from "@/services/carService"
import { useMutation, useQueryClient } from '@tanstack/react-query';

//get all the cars
export function useCars() {
  return useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  })
}


// post a new car
export function usePostCar() {
    
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      alert("Car added successfully!");
    },
    onError: () => {
      alert("Failed to add car");
    },
  });
}


export function useDeleteCar() {
  const queryClient = useQueryClient()

  return useMutation({
    
    mutationFn: (id: string | number) => deleteCar(String(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
      alert("Car deleted successfully!")
    },
    onError: () => {
      alert("Failed to delete car")
    },
  })                                                                                                                                                                                                          
}

export function useFetchCarById() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string | number) => fetchCarById(String(id)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] })
      alert("Car fetched successfully!")
    },
    onError: () => {
      alert("Failed to fetch car by ID")
    },
  })
}

