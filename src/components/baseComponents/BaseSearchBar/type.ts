import { MouseEventHandler, ReactNode } from 'react';

export interface searchbarProps {
  id?: string;
  name?: string;
  placeholder?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  defaultValue?: string;
  spinner?: ReactNode;
  showSpinner?: boolean;
  className?: string;
}
