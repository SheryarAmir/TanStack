"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { getUsers } from "@/hook/user.hook";
import Image from "next/image";

const Page = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const blogId = params?.blogId;
  const age = searchParams.get("age") || "";
  const { data, isError, isLoading } = getUsers();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (isError) return <div className="text-red-500">Error fetching data</div>;

  console.log("data with image", data);
  return (
    <div className="container mx-auto p-6">
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold">Blog ID: {blogId}</p>
        <p className="text-gray-600">Age: {age}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">ID: {item.id}</p>
                <p className="text-gray-600">Status: {item.status}</p>
                <p className="text-gray-600">Species: {item.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
