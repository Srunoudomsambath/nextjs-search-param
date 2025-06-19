'use client';
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:shadow-lg transition duration-300">
      Increment
      </button>
    </>
  );
}
