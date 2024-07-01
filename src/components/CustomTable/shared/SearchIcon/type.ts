import { Dispatch, SetStateAction } from 'react';
import { FiltersChips } from '../../types';
import { OnHandleIconClick } from '../../widgets/FilterContainer/type';
import { Control, FieldValues } from 'react-hook-form';

export type Props = {
  onHandleIconClick: OnHandleIconClick;
  active?: boolean;
  chips?: FiltersChips<any>;
  handleFiltersChips?: (key: unknown) => void;
  search?: boolean;
  setSearch?: Dispatch<SetStateAction<boolean>>;
  control: Control<FieldValues>;
};
