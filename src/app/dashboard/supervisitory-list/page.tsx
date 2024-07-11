import { SupervisoryListTemplate } from '@/components/template/SupervisoryList';
import { Suspense } from 'react';

export default function SupervisitoryList() {
  return (
    <Suspense fallback={'loading'}>
      <SupervisoryListTemplate />;
    </Suspense>
  );
}
