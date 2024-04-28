import { FabOwnProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ICustomFab extends FabOwnProps {
  onClick?: (e: any) => void;
  className?: string;
  icon?: ReactNode;
  type: EFabMode;
}

export enum EFabMode {
  FAB = 'fab',
  SPEED_DIAL = 'speed-dial',
}
export interface IAction {
  icon: ReactNode;
  name: string;
  onClick: () => void;
}
