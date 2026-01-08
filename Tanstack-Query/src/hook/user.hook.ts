import { useQuery } from "@tanstack/react-query";
import { userServices } from "@/services/user.sevices"; 
import { useEffect } from "react";
import { CharacterArray  } from "@/types/user.types"; 

export function getUsers() { 
  const { data, isLoading, isError } = useQuery<CharacterArray>({
    queryKey: ["users"], 
    queryFn: userServices.fetchUsers 
  })

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return { data, isLoading, isError };
}

