import { OnHandleIconClick } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FiltersChips } from '../../types';

export type Props = {
  onHandleIconClick: OnHandleIconClick;
  active?: boolean;
  chips?: FiltersChips<any>;
  handleFiltersChips?: (key: unknown) => void;
};
