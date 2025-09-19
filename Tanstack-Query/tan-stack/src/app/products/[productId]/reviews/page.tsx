"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";

const ProductId = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params?.productId;

  const reviews = [
    { id: 1, name: "John Anderson", country: "UK" },
    { id: 2, name: "Sheryar Amir", country: "Pakistan" },
    { id: 3, name: "Sajid Kumar", country: "India" },
    { id: 4, name: "Zain Thompson", country: "Canada" },
  ];

  const handleViewReview = (id: Number) => {
    router.push(`/products/${productId}/reviews/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            iPhone {productId}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            see the reviews of the people from all arount the world for the
            product Iphone {productId}.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <button
                key={review.id}
                onClick={() => handleViewReview(review.id)}
                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    {review.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    from {review.country}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
