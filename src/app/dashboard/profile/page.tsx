import Profile from '@/components/pages/dashboard/Profile';
import { Suspense } from 'react';

export default function ProfilePage() {
  return (
    <Suspense fallback={'loading'}>
      <Profile />
    </Suspense>
  );
}
