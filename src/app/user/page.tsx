'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { UserType } from '@/types/userType';
import CardUser from '@/components/card-user/CardUser';
import LoadingSpinner from '@/components/loading/LoadingSpinner';

export default function UsersPage() {
  const [userlist, setUserlist] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    setQuery(search);
  }, [search]);

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

  const filteredUsers = search
    ? userlist.filter((user: UserType) =>
        user.firstName.toLowerCase().includes(search)
      )
    : userlist;

  if (loading) return <LoadingSpinner/>;
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
          <CardUser key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
