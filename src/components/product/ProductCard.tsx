import { newType } from '@/types/newType';
import Image from 'next/image';
import React from 'react';

export default function ProductCard({ id, title, description, price, image, category }: newType) {
  return (
    <div
      key={id}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative w-full h-[250px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
          SALE
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[260px]">
        <div>
          <h3 className="text-lg font-semibold text-purple-700 line-clamp-2 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-2">{description}</p>
          <span className="text-xs text-white bg-blue-500 rounded-full px-2 py-0.5">{category}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">${price}</span>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
