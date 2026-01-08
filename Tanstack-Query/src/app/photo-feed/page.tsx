import React from "react";
import Image from "next/image";
import { wonderImages } from "./wonders";
import Link from "next/link";

const Page = () => {
  const data = wonderImages;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Paris Photo Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ id, name, src, location, photographer, alt }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <Link href={`/photo-feed/${id}`}>
                {" "}
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
              </Link>
              <p className="text-gray-600 mb-1">{location}</p>
              <p className="text-gray-500 text-sm">Photo by {photographer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
