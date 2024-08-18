'use client';

import SumArray from './sumArray';
import localStorageCount from './localStorage';

export default function Answer() {
  SumArray([1, 5.5, 4, 2]);
  
  return (
  <>
  {localStorageCount()}
  </>
);
}
