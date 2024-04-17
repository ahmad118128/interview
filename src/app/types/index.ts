import { CSSProperties } from 'react';

export type SvgType = {
  color?: string;
  width?: string;
  height?: string;
  styles?: CSSProperties;
  background?: string;
  onClick?: () => void;
  cursor?: string;
  fill?: string;
};
