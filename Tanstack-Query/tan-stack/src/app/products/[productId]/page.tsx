"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";

const ProductId = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params?.productId;

  const handleViewReview = () => {
    router.push(`/products/${productId}/reviews`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            iPhone {productId}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Experience exceptional camera quality and outstanding performance
            with the iPhone {productId}. Featuring state-of-the-art technology
            and innovative design.
          </p>

          <button
            onClick={handleViewReview}
            className="border-amber-300 bg-green-600 text-white p-2 rounded-2xl"
          >
            show review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
