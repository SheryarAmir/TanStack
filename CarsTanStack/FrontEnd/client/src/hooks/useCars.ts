
import { useQuery } from "@tanstack/react-query"
import { fetchCars, postCar } from "@/services/carService"
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



