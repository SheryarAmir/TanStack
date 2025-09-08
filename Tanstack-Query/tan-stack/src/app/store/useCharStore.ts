
import { create } from "zustand";
import { Character } from "../../types/character";

interface CharacterState {
  characters: Character[];
  setCharacters: (data: Character[]) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  setCharacters: (data) => set({ characters: data }),
}));
    
