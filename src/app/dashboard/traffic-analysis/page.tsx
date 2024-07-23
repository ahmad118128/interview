import TrafficAnalysisTemplate from '@/components/template/TrafficAnalysis';
import { Suspense } from 'react';

export default function TrafficAnalysis() {
  return (
    <Suspense fallback={'loading'}>
      <TrafficAnalysisTemplate />
    </Suspense>
  );
}
