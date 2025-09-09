"use client";
import React, { useState } from "react";
import { useCounter } from "../../store/Counter.store";

const Page = () => {
  const { count, increment, decrement, setCount } = useCounter();
  const [inputValue, setInputValue] = useState("");

  const handleSetCount = () => {
    const newValue = parseInt(inputValue);
    if (!isNaN(newValue)) {
      setCount(newValue);
      setInputValue("");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Counter Example</h1>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <span className="text-xl font-bold">{count}</span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase
        </button>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter new count"
        />
        <button
          onClick={handleSetCount}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Set Count
        </button>
      </div>
    </div>
  );
};

export default Page;
