import { ReactNode } from 'react';
import { MouseEvent } from 'react';
import { FabOwnProps } from '@mui/material';

export interface IBasedFabButton extends FabOwnProps {
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  className: string;
  type: EFabMode;
  actions: IAction[];
}

export interface IAction {
  icon: ReactNode;
  name: string;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export enum EFabMode {
  FAB = 'fab',
  SPEED_DIAL = 'speed-dial',
}
