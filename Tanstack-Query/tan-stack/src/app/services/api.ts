import axios from "axios";
import { CharactersResponse } from "../../types/character";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharacters = async (): Promise<CharactersResponse> => {
  const response = await api.get<CharactersResponse>("/character");
  return response.data;
};

export default api;
