import { MouseEventHandler, ReactNode } from 'react';

export interface HeaderButtonProps {
  children: ReactNode;
  tooltipTitle: string;
  mode: 'desktop' | 'mobile';
  clickHandler: MouseEventHandler<HTMLButtonElement> | undefined;
}
