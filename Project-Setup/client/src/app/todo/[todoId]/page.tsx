"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetTodoById } from "@/hooks/todo.hook";

const TodoDetailPage = () => {
  const params = useParams();
  const todoId = params?.todoId as string;
  const { data: todo, isLoading, isError } = useGetTodoById(todoId);

  if (isLoading) return <p className="text-center mt-6">Loading todo...</p>;
  if (isError) return <p className="text-center mt-6">Error loading todo</p>;
  if (!todo) return <p className="text-center mt-6">Todo not found</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo Details</h1>
        <p>
          <strong>ID:</strong> {todo._id}
        </p>
        <p>
          <strong>Title:</strong> {todo.title}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(todo.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TodoDetailPage;
