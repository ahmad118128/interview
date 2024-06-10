import { FiltersChips } from '@/components/CustomTable/types';
import { ReactElement, ReactNode } from 'react';

export type HeaderMode = EFilterModeIcon.TABLE | EFilterModeIcon.CHART;
export type onHandleModeChange = (name: HeaderMode) => void;

type MultiModeFilter =
  | {
      hasModeHandler: true;
      onHandleModeChange: onHandleModeChange;
    }
  | {
      hasModeHandler?: false;
    };

export type HeaderFilterTableProps = MultiModeFilter & {
  chips: FiltersChips<any>;
  activeMode?: ActiveMode;
  refreshLoading: boolean;
  onHandleIconClick: OnHandleIconClick;
  control: any;
  reset: any;
  collapse: boolean;
  handleFiltersChips: (filterKey: any) => void;
  onSearchClick?: () => void;
};

export enum EFilterTableNameIcon {
  FILTER = 'filter',
  REFRESH = 'refresh',
  COLUMNS = 'columns',
}

export enum EFilterModeIcon {
  CHART = 'chart',
  TABLE = 'table',
}

interface IGlobalIconFilterTable {
  img: ReactElement;
  title: string;
  disabled?: boolean;
}

export interface IconFilterNameTable extends IGlobalIconFilterTable {
  name: EFilterTableNameIcon;
}

export interface IconFilterModeTable extends IGlobalIconFilterTable {
  mode: HeaderMode;
}

type ActiveMode = HeaderMode;
export type OnHandleIconClick = (name: EFilterTableNameIcon) => void;

export type StyledAccordionProps = {
  statusBorder?: boolean;
};

export type StyledHoverIconProps = {
  active: boolean;
  filters?: boolean;
};
