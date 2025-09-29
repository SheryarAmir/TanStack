"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { todoServices } from "@/services/TodoService";
import { useEffect } from "react";
import { CreateTodoDTO } from "@/types/todo.type";

export function useAddTodo() {
  const { mutate, data, isError, isSuccess } = useMutation({
    mutationFn: (todoData: CreateTodoDTO) => todoServices.createTodo(todoData),
    onSuccess: () => {
      console.log(`todo add successfully`);
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Todo added:", data);
    }
  }, [isSuccess, data]);

  return { mutate, data, isError, isSuccess };
}

export function useGetTodos() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: todoServices.fetchTodo,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return { data, isLoading, isError };
}

export function useGetTodoById(todoId: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => todoServices.fetchTodoById(todoId),
    enabled: !!todoId,
  });

  useEffect(() => {
    if (data) {
      console.log("Fetched Todo:", data);
    }
  }, [data]);

  return { data, isLoading, isError };
}
export function useDeleteTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => todoServices.deleteTodo(id),
    onSuccess: () => {
      alert(`Todo deleted successfully`);

      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

export function useCompleteTodo() {
  const queryClient = useQueryClient();
  console.log("this is mark as complete");
  return useMutation({
    mutationFn: (id: string) => todoServices.completeTodo(id),
    onSuccess: () => {
      alert(`marked as complete`);
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

// queryClient.invalidateQueries(["todos"]) tells React Query:

// “Hey, this query data is stale. Go fetch it again.”

// So after deleting, your page automatically refetches the updated todo list.

// No need for manual useEffect or setState to update the UI.
