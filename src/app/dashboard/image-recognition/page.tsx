import ImageRecognitionTemplate from '@/components/template/ImageRecognition';
import { Suspense } from 'react';

export default function ImageRecognition() {
  return (
    <Suspense>
      <ImageRecognitionTemplate />
    </Suspense>
  );
}
