import { OnHandleIconClick } from '../../widgets/FilterContainer/type';
import { FiltersChips } from '../CustomCell/types';

export type Props = {
  onHandleIconClick: OnHandleIconClick;
  chips: FiltersChips<any>;
  handleFiltersChips: (key: unknown) => void;
};
