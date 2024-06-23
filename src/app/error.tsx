'use client';

import ErrorPage500 from '@/components/pages/customError500';
import React from 'react';

export default function error() {
  return <ErrorPage500 statusCode={500} />;
}
