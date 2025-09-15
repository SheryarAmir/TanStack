import api from "./api";
import { CharacterArray,Character } from "@/types/user.types"; // Fixed import

class UserServices {
  // Method to fetch multiple characters
  async fetchUsers(): Promise<CharacterArray> {
    const response = await api.get("/character"); // This should return the array format
    console.log(response.data);
    return response.data;
  }


  // Method to fetch single character (if needed)
  async fetchUser(id: number): Promise<Character> {
    const response = await api.get(`/character/${id}`);
    console.log(response.data);
    return response.data;
  }
}

export const userServices = new UserServices(); // Fi