"use client";
import React from "react";

import { useRouter } from "next/navigation";
import { useGetTodos, useDeleteTodo, useCompleteTodo } from "@/hooks/todo.hook";

const TodosPage = () => {
  const deleteTodo = useDeleteTodo();
  const completeTodo = useCompleteTodo();
  const { data, isLoading, isError } = useGetTodos();
  const router = useRouter();

  function handlerdelete(id: string) {
    console.log(id);
    deleteTodo.mutate(id);
  }
  function handlercomplete(id: string) {
    console.log(id);
    completeTodo.mutate(id);
  }
  if (isLoading) return <p className="text-center mt-6">Loading todos...</p>;
  if (isError)
    return (
      <p className="text-center mt-6 text-red-500">Failed to load todos</p>
    );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          All Todos
        </h1>

        {data && data.length > 0 ? (
          <ul className="space-y-4">
            {data.map((todo: any) => (
              <li
                key={todo._id}
                className="flex justify-between items-center border border-gray-200 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-700">{todo.title}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() => router.push(`/todo/${todo._id}`)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handlerdelete(todo._id)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handlercomplete(todo._id)}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No todos found</p>
        )}
      </div>
    </div>
  );
};

export default TodosPage;
