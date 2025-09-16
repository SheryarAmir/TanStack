"use client";
import React, { useState } from "react";
import useTodoStore from "@/store/Todo.store";

const Page = () => {
  const { todos, addTodo, deleteTodo, toggleComplete } = useTodoStore();

  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Todo
        </button>
      </div>

      <ul className="space-y-4">
        {todos.map((item) => (
          <div
            key={item.id}
            className={`bg-gray-50 rounded-lg p-4 ${
              item.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <li className="flex justify-between items-center mb-2">
              {item.text}
            </li>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => deleteTodo(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => toggleComplete(item.id)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
              >
                {item.completed ? "Undo" : "Complete"}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Page;
