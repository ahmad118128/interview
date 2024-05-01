import { MouseEventHandler, ReactNode } from 'react';

export interface HeaderButtonProps {
  children: ReactNode;
  tooltipTitle: string;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}
