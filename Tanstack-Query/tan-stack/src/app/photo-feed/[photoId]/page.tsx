"use client";
import React from "react";
import { useParams } from "next/navigation";
import { wonderImages } from "../wonders";
import Image from "next/image";

const PhotoDetail = () => {
  const params = useParams();
  const photoId = Number(params?.photoId);

  const photo = wonderImages.find((p) => p.id === photoId);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[60vh]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 75vw"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{photo.name}</h1>
          <p className="text-gray-600 mb-2">{photo.location}</p>
          <p className="text-gray-500">Photographed by {photo.photographer}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
