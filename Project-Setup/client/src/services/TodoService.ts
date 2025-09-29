import api from "./api";
import { endpoints } from "@/constants/endpoints";
import { CreateTodoDTO } from "@/types/todo.type";
class TodoServices {
  async fetchTodo() {
    try {
      const url = endpoints.TODO.FETCH_ALL_TODOS;
      const response = await api.get(url);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot fetch all the TODOS.");
    }
  }

  async createTodo(data: CreateTodoDTO) {
    if (!data) throw new Error("Todo data not provided");
    try {
      const url = endpoints.TODO.POST_TODO;
      const response = await api.post(url, data);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot create a TODO");
    }
  }

  async fetchTodoById(id: string) {
    if (!id) throw new Error("Todo ID not provided");
    try {
      const url = endpoints.TODO.FETCH_TODO_BY_ID(id);
      const response = await api.get(url);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot fetch a single todo");
    }
  }

  async deleteTodo(id: string) {
    if (!id) throw new Error("Todo ID not provided");
    try {
      const url = endpoints.TODO.DELETE_TODO(id);
      const response = await api.delete(url);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot delete todo");
    }
  }

  async completeTodo(id: string) {
    if (!id) throw new Error("Todo ID not provided");
    try {
      console.log(`this  is id from services ${id}`);
      const url = endpoints.TODO.COMPLETE_TODO(id);
      const response = await api.patch(url);
      console.log(` complete id${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error("Cannot mark as complete");
    }
  }
}

export const todoServices = new TodoServices();
