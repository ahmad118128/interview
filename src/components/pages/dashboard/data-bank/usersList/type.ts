import { FiltersChips } from '@/components/CustomTable/types';
import { Dispatch, ReactElement, SetStateAction } from 'react';

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
  setCollapse?: Dispatch<SetStateAction<boolean>>;
  handleFiltersChips: (filterKey: any) => void;
  onSearchClick?: () => void;
  tableName?: string;
  search?: boolean;
  setSearch?: Dispatch<SetStateAction<boolean>>;
};

export enum EFilterTableNameIcon {
  FILTER = 'filter',
  SEARCH = 'search',
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
