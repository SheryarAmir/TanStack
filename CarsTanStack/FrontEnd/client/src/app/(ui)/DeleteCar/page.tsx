"use client";

import { useState } from "react";
import { useDeleteCar } from "@/hooks/useCars"; // Adjust the path as needed
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DeleteCarPage() {
  const [carId, setCarId] = useState("");
  const { mutate: deleteCar, isPending } = useDeleteCar();
  const router = useRouter();

  const handleDelete = () => {
    if (!carId.trim()) {
      alert("Please enter a car ID");
      return;
    }
    deleteCar(carId);
  };

  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <Button onClick={() => router.push("/getCars")}>back</Button>
      </div>
      <div className="min-h-screen flex items-center justify-center  bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Delete Car</h1>
          <input
            type="text"
            placeholder="Enter Car ID"
            value={carId}
            onChange={(e) => setCarId(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleDelete}
            disabled={isPending}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            {isPending ? "Deleting..." : "Delete Car"}
          </button>
        </div>
      </div>
    </>
  );
}
