import { CSSProperties } from 'react';

export type IconTitleProps = {
  title?: string;
  icon: string;
  onClick?: () => void;
  label: boolean;
  className?: string;
};

export type StyledContainerIconTitleType = {
  active?: boolean;
  label?: boolean;
};

export type StyledContainerSideBarType = {
  open: boolean;
  customStyles?: CSSProperties;
};

export type SideBarProps = {
  openSideBar: boolean;
  closeSideBar: () => void;
  customStyles?: CSSProperties;
};
