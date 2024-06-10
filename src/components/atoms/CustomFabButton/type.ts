import { MouseEvent, ReactNode } from 'react';

export interface ICustomFab {
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon?: ReactNode;
  fabType: EFabMode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'extended';
  disabled?: boolean;
  action?: IAction[];
}

export enum EFabMode {
  FAB = 'fab',
  SPEED_DIAL = 'speed-dial',
}
export interface IAction {
  icon: ReactNode;
  name: string;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}
