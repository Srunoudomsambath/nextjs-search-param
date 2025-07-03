import UserDetailPage from "./UserDetailPage";
import { Metadata } from "next";
interface GenerateMetadataProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  try {
    // Await the params Promise
    const { id } = await params;
    
    const res = await fetch(`https://dummyjson.com/users/${id}`, {
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
    console.error('Metadata fetch error:', error);
    return {
      title: 'User Not Found',
      description: 'This user does not exist or an error occurred.',
    };
  }
}

export default function page() {
  return <UserDetailPage/>;
}