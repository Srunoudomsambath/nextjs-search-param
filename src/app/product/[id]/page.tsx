import Image from 'next/image';
import React from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Params) {
  const productId = parseInt(params.id);
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`, { cache: 'no-store' });

  if (!res.ok) {
    return <div className="text-center text-red-500 mt-10">Product not found</div>;
  }

  const product = await res.json();
  //hello
  return (
    <main className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <section className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[300px] relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              unoptimized
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <p className="text-md font-medium text-white bg-blue-500 w-fit px-3 py-1 rounded-full mb-4">
              {product.category}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-red-500">${product.price}</span>
              <span className="text-sm text-green-600">✅ In Stock</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 rounded-md border border-gray-300 hover:border-blue-500 text-sm font-medium text-gray-700 hover:text-blue-500 transition"
                >
                  {size}
                </button>
              ))}
            </div>

            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
