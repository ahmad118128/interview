import { ReactNode } from 'react';

export interface searchbarProps {
  id?: string;
  name?: string;
  placeholder?: string;
  onChange: (e: string) => void;
  defaultValue?: string;
  spinner?: ReactNode;
  showSpinner?: boolean;
  className?: string;
}
