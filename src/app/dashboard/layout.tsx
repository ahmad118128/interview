import Header from '@/components/molecules/header';
import React, { ReactNode } from 'react';

export default function DashboardHeader({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div style={{ position: 'relative', top: 64 }}>{children}</div>
    </div>
  );
}
