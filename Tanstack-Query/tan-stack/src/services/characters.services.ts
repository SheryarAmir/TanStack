import api from "./api";
import { CharactersResponse } from "../types/character";

class CharacterService {
  async fetchCharacters(): Promise<CharactersResponse> {
    const response = await api.get<CharactersResponse>("/character");
    return response.data;
  }

}

// Export a single instance (singleton)
export const characterService = new CharacterService();

