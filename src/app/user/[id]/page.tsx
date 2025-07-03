
import { Metadata } from 'next';
import UserDetailPage from './UserDetailPage';
  // TODO meta data are base on server side
  // ✅ Dynamic metadata function
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  try {
    const res = await fetch(`https://dummyjson.com/users/${params.id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('User not found');
    }

    const user = await res.json();

    return {
      title: `${user.firstName} ${user.lastName} - Profile`,
      description: `Details of ${user.firstName} ${user.lastName}, user from ${user.university}`,
    };
  } catch (error) {
     console.error('Metadata fetch error:', error); // 👈 Now it's used
    return {
      title: 'User Not Found',
      description: 'This user does not exist or an error occurred.',
    };
  }
}

export default function page(){
  return (
    <UserDetailPage/>
  )
}
