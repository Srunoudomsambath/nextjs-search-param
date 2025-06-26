import { UserType } from "@/types/userType";
import Link from "next/link";
type Params = {
  params: {
    id: string;
  };
};

export default async function UserDetailPage({ params }: Params) {
  const userId = params.id;
 const res = await fetch(`https://dummyjson.com/users/${userId}`, { cache: 'no-store' });


  if (!res.ok) {
    return <p className="text-red-500">Failed to fetch user data.</p>;
  }

  const user: UserType = await res.json();

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-2xl mt-10 border border-gray-200">
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h1 className="text-xl font-bold text-center mt-4">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-center text-sm text-gray-500">{user.email}</p>
      <div className="mt-4 space-y-2 text-sm text-gray-700">
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>University:</strong> {user.university}</p>
      </div>
      <Link href="/users">
  <p className="mt-6 text-center text-blue-600 hover:underline">← Back to user list</p>
</Link>
    </div>
  );
}
