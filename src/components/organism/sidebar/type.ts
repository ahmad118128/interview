import { CSSProperties, ReactElement } from 'react';
export type IconTitleProps = {
  title: string;
  icon: ReactElement;
  onClick?: () => void;
  open: boolean;
  className?: string;
};
export type StyledContainerIconTileType = {
  active?: boolean;
  open?: boolean;
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
