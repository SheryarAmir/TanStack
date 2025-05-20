// import { useQuery } from "@tanstack/react-query"
import {registerUser,loginUser} from "@/services/AuthServices"
import { useMutation, useQueryClient } from '@tanstack/react-query';
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


// Login Hook
export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log("User logged in:", data);
    },
    onError: (error: any) => {
      console.error(`Login error: ${error}`);
    },
  });
};
