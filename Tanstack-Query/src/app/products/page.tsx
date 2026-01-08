"use client";

import React from "react";
import { useRouter } from "next/navigation";
// import { greet } from "@naveedalirehmani/greeter";   // using naveed ustad package .

const Product = () => {
  const router = useRouter();

  function handlerProductId(id: number) {
    router.push(`/products/${id}`);
  }

  // alert(greet("sheryar"));

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Latest iPhone Models
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[20, 21, 22, 23, 24].map((id) => (
            <button
              key={id}
              onClick={() => handlerProductId(id)}
              className="bg-white shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
            >
              <div className="text-lg font-semibold text-gray-900">
                iPhone {id}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Experience the latest technology
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
