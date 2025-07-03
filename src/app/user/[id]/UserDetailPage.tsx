'use client'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/userType';
import Link from 'next/link';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

export default function UserDetailPage() {
  const { id } = useParams(); // 👈 this is what your teacher wants to see
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/users/${id}`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user data.');
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <LoadingSpinner/>;
  if (error) return <p className="text-red-500 p-6">{error}</p>;
  if (!user) return <p className="text-gray-500 p-6">User not found.</p>;


  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-xl rounded-xl mt-12 border border-gray-200 font-sans">
      <div className="flex flex-col items-center mb-6">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-50 ring-1 ring-blue-100 shadow-sm"
        />
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-md text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500 mt-1">@{user.userName}</p> {/* Using userName */}
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-3 text-sm text-gray-800">
        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
          <p className="font-semibold text-gray-700">Phone:</p>
          <p className="text-blue-700 font-medium">{user.phone}</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
          <p className="font-semibold text-gray-700">Gender:</p>
          <p>{user.gender}</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b border-gray-100">
          <p className="font-semibold text-gray-700">Age:</p>
          <p>{user.age}</p>
        </div>
        <div className="flex justify-between items-center"> {/* No border-b for the last item in this section */}
          <p className="font-semibold text-gray-700">University:</p>
          <p className="text-right max-w-[60%]">{user.university}</p>
        </div>
      </div>

      <Link href="/user">
        <p className="mt-8 text-center text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200 font-medium">
          ← Back to user list
        </p>
      </Link>
    </div>
  );
}