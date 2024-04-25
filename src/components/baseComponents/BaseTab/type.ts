import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export type TabProps = {
  data: TabDataItemType[];
  type: 'normalTab' | 'buttonTab';
  activeid?: number;
  sx?: SxProps;
  tabBtnSx?: SxProps;
  className?: string;
};

export type TabPanelProps = {
  children?: ReactNode;
  index: number;
  value: number;
};

export type TabDataItemType = {
  id: number;
  label: ReactNode;
  icon?: string;
  disableTabRipple?: boolean;
  tabPanel?: ReactNode;
  disabled?: boolean;
};

export type TabPanelItemType = {
  id: number;
  component?: ReactNode;
};
