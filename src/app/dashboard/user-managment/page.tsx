import { UserManagement } from '@/components/pages/dashboard/UsersManagement';
import { Suspense } from 'react';

export default function UserManagment() {
  return (
    <Suspense fallback={'loading'}>
      <UserManagement />
    </Suspense>
  );
}
