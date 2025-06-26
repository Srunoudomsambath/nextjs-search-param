'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { UserType } from '@/types/userType';

export default function UsersPage() {
  const [userlist, setUserlist] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search')?.toLowerCase() || '';

  // Sync input state with URL param
  useEffect(() => {
    setQuery(search);
  }, [search]);

  // Fetch users once
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        const users = data.users || data;
        setUserlist(users);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Update query & URL on every input change (live search)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    const trimmed = val.trim();
    if (trimmed) {
      router.push(`?search=${encodeURIComponent(trimmed)}`);
    } else {
      router.push('/user');
    }
  };

  // Filter users according to current search param
  const filteredUsers = search
    ? userlist.filter((user: UserType) =>
        user.firstName.toLowerCase().includes(search)
      )
    : userlist;

  if (loading) return <p className="p-4 text-blue-500">Loading users...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search by first name..."
        value={query}
        onChange={handleChange}
        className="mb-6 px-4 py-2 border border-gray-300 rounded-xl w-full"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No users found.</p>
        )}
        {filteredUsers.map((user) => (
          <Link key={user.id} href={`/user/${user.id}`}>
            <div className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-xl font-bold text-center mt-2 text-accent-color">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-center text-sm text-gray-600">{user.email}</p>
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>University:</strong> {user.university}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
