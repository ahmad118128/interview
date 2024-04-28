import { FabOwnProps } from '@mui/material';
import { ReactNode } from 'react';

export interface IBasedFabButton extends FabOwnProps {
  onClick?: (e: any) => void;
  className: string;
  type: EFabMode;
  actions: IAction[];
}

export interface IAction {
  icon: ReactNode;
  name: string;
  onClick: () => void;
}

export enum EFabMode {
  FAB = 'fab',
  SPEED_DIAL = 'speed-dial',
}
