import { ChangeEvent } from 'react';

export interface CustomPaginationProps {
  warperStyle?: object;
  innerStyle?: any;
  pageCount?: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, pageButton: number) => void;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  size?: 'small' | 'medium' | 'large';
}
