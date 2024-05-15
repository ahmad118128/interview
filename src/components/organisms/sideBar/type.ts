import { CSSProperties } from 'react';

export type IconTitleProps = {
  title?: string;
  icon: string;
  onClick?: () => void;
  open: boolean;
  className?: string;
  selected: boolean;
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
