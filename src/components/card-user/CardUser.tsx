// components/CardUser.tsx
import Link from 'next/link';
import { UserType } from '@/types/userType';

type CardUserProps = {
  user: UserType;
};

export default function CardUser({ user }: CardUserProps) {
  return (
    <Link href={`/user/${user.id}`}>
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
  );
}
