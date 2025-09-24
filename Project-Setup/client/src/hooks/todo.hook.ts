"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import { todoServices } from "@/services/TodoService";
import { useEffect } from "react";

export function useAddTodo() {
  const { mutate, data, isError, isSuccess } = useMutation({
    mutationFn: (todoData: { title: string }) =>
      todoServices.createTodo(todoData),
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
  return useMutation({
    mutationFn: (id: string) => todoServices.deleteTodo(id),
    onSuccess: () => {
      console.log(`todo delete successfully`);
    },
  });
}

export function useCompleteTodo() {
  return useMutation({
    mutationFn: (id: string) => todoServices.completeTodo(id),
    onSuccess: () => {
      console.log(`marked as complete`);
    },
  });
}
