import { SettingTemplate } from '@/components/template/Setting';
import { Suspense } from 'react';

export default function Setting() {
  return (
    <Suspense fallback={'loading'}>
      <SettingTemplate />
    </Suspense>
  );
}
