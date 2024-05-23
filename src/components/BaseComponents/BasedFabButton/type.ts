import { MouseEventHandler, ReactNode } from 'react';
import { MouseEvent } from 'react';
import { FabOwnProps, FabProps } from '@mui/material';

export interface IBasedFabButton extends FabProps {
  fabType: EFabMode;
  actions?: IAction[];
}

export interface IAction {
  icon: ReactNode;
  name: string;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

export enum EFabMode {
  FAB = 'fab',
  SPEED_DIAL = 'speed-dial',
}
