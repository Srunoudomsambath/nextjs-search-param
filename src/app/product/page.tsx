import ProductCard from '@/components/product/ProductCard';
import React from 'react'
import Link from 'next/link';
import { newType } from '@/types/newType';

export default async function page() {
  const BASE_URL = "https://fakestoreapi.com/products"
  const res = await fetch(BASE_URL);
  if(!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  const product:newType[] = data;
  console.log("Product in " + product);

  // Simulating a fetch call to get products
   return (
    <section className='w-[90%] mx-auto my-10'>
      <h2 className='font-bold text-[24px] text-blue-500 uppercase'>Product Page</h2>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4'>
        {
          product.map((pro) => (
            <Link href={`/product/${pro.id}`} key={pro.id}>
              <ProductCard
                id={pro.id}
                title = {pro.title}
                description={pro.description}
                price={pro.price}
                image={pro.image}
                category={pro.category}
              />
            </Link>
          ))
        }
      </div>
    </section>
  )
}
