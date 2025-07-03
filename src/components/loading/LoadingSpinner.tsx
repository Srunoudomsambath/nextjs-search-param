'use client';

import Lottie from 'lottie-react';
import loading from '@/app/lottie/loading.json'
export default function LoadingSpinner() {
  return (
    <div className="w-200 h-200 mx-auto">
      <Lottie animationData={loading} loop={true} />
    </div>
  );
}
