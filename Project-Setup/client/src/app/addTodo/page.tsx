"use client";
import React, { useState } from "react";
import { useAddTodo } from "@/hooks/todo.hook";

const AddTodoPage = () => {
  const [todoText, setTodoText] = useState("");
  const { mutate, isSuccess, isError } = useAddTodo();

  const handleAddTodo = () => {
    console.log(todoText);
    mutate({ title: todoText });
    setTodoText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter a todo..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
          >
            Add Todo
          </button>
        </div>

        {isSuccess && (
          <p className="text-green-600 text-sm mt-2">
            Todo added successfully!
          </p>
        )}
        {isError && (
          <p className="text-red-600 text-sm mt-2"> Failed to add todo.</p>
        )}
      </div>
    </div>
  );
};

export default AddTodoPage;
