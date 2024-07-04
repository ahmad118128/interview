import { ReactNode } from 'react';
import { SxProps, TabsProps } from '@mui/material';

export interface TabProps extends TabsProps {
  data: TabDataItemType[];
  type: 'normalTab' | 'buttonTab';
  activeId?: number;
  tabBtnSx?: SxProps;
  tabKey: string;
}

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
