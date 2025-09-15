import api from "./api";
import { CharacterArray, Character } from "@/types/user.types"; // Fixed import

// add try and catch, error handling.
// move the api endpoint urls to a api.constants.ts

export const endpoints = {
  USER: {
    FETCH_CHARACTERS: "/character",
    FETCH_CHARACTER_BY_ID: (id: number) => `/character/${id}`,
  },
};
class UserServices {
  // Method to fetch multiple characters
  async fetchUsers(): Promise<CharacterArray> {
    try {
      const url = endpoints.USER.FETCH_CHARACTERS;
      const response = await api.get(url); // This should return the array format
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot fetch Users.");
    }
  }

  // Method to fetch single character (if needed)
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

export const userServices = new UserServices(); // Fi
