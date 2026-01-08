import api from "./api";
import { CharacterArray, Character } from "@/types/user.types";
import { endpoints } from "@/constants/endpoints";

class TodoServices {
  async fetchUsers(): Promise<CharacterArray> {
    try {
      const url = endpoints.USER.FETCH_CHARACTERS;
      const response = await api.get(url);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot fetch Users.");
    }
  }

  async fetchUser(id: number): Promise<Character> {
    if (!id) throw new Error("User ID not provided");
    try {
      const url = endpoints.USER.FETCH_CHARACTER_BY_ID(id);
      const response = await api.get(url);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot fetch single user");
    }
  }
}

export const todoServices = new TodoServices();
