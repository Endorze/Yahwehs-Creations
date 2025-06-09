"use client"

import Image from "next/image";
import { useState } from "react";

const OfficialMediaCard = ({
  image = "images/newsarticle/gyro.png"
}: {
  image?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative group cursor-pointer h-[250px] w-auto"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image}
          alt="Official Media"
          width={100}
          height={100}
          className="object-cover w-full h-full group-hover:grayscale"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={image}
              alt="Official Media"
              width={800}
              height={600}
              className="object-contain w-auto h-auto max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OfficialMediaCard;
