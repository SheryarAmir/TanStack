import api from "./api";
import { CharactersResponse } from "../types/character";

class CharacterService {
  async fetchCharacters(): Promise<CharactersResponse> {
    const response = await api.get<CharactersResponse>("/character");
    return response.data;
  }

  async fetchCharacterById(id: number) {
    const response = await api.get(`/character/${id}`);
    return response.data;
  }

}

export const characterService = new CharacterService();


