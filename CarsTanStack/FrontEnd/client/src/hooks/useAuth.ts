// import { useQuery } from "@tanstack/react-query"
import {registerUser,loginUser} from "@/services/AuthServices"
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from "next/navigation";
// import { AuthTypes } from "@/types/AuthTypes";





export const useRegister = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("User registered:", data);
    },
    onError: (error: any) => {
    
        console.log(`signup error: ${error}`)
    },
  });
};


export const useLogin = () => {
  const router = useRouter(); 

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      router.push("/postCar");
    },
    onError: (error: any) => {
     
      alert(`Login error in AuthHooks: ${error.message}`);
    },
  });
};