import DatabankTemplate from '@/components/template/DataBank';
import { Suspense } from 'react';

export default function Databank() {
  return (
    <Suspense fallback={'loading'}>
      <DatabankTemplate />
    </Suspense>
  );
}
