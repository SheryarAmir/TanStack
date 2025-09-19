"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

const ReviewId = () => {
  const rendomNumbers = (count: any) => {
    return Math.floor(Math.random() * count);
  };

  const params = useParams();
  const router = useRouter();
  const productId = params?.productId;
  const reviewId = params?.reviewId;
  console.log(reviewId);

  const reviewData = {
    id: reviewId,
    user: "John Doe",
    rating: 4.5,
    date: "March 15, 2024",
    title: "Great Experience with iPhone",
    content: `I've been using the iPhone ${productId} for several months now, and I'm thoroughly impressed. The camera quality is exceptional, and the battery life is outstanding. The new features really make a difference in daily use.`,
    pros: ["Camera quality", "Battery life", "Performance"],
    cons: ["Premium price", "Limited customization"],
  };

  const random = rendomNumbers(2);

  if (random === 1) {
    throw new Error(
      "this error message come from the error file inside of the app folder"
    ); //the error in deveploment mode and the error in production mode is different . you can see that if you do npm run build .
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <button
            onClick={() => router.back()}
            className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
          >
            ← Back to reviews
          </button>

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {reviewData.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>By {reviewData.user}</span>
              <span>•</span>
              <span>{reviewData.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                {reviewData.rating}
              </span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              {reviewData.content}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-green-600 mb-3">Pros</h3>
                <ul className="space-y-2">
                  {reviewData.pros.map((pro, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-500">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-red-600 mb-3">Cons</h3>
                <ul className="space-y-2">
                  {reviewData.cons.map((con, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-red-500">×</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewId;
