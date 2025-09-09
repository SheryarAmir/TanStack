import { useCharacterStore } from "../store/character.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { characterService } from "../services/characters.services";
import { CharactersResponse } from "../types/character";

export function useCharacters() {

  const setCharacters = useCharacterStore((state) => state.setCharacters);
  
  const { data, isLoading, isError } = useQuery<CharactersResponse>({
    queryKey: ["characters"],
    queryFn: () => characterService.fetchCharacters(),
  });

  useEffect(() => {
    if (data) {
      console.log("Fetched results:", data.results);
      setCharacters(data.results);
    }
  }, [data, setCharacters]);

  return { data, isLoading, isError };
}
