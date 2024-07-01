import { ReportPage } from '@/components/pages/dashboard/Reports';
import { Suspense } from 'react';

export default function Report() {
  <Suspense fallback={'loading'}>
    <ReportPage />;
  </Suspense>;
  return;
}
