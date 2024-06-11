// import { searchbarProps } from '../../baseComponents/BaseSearchBar/type';
import { searchbarProps } from '@/components/BaseComponents/BaseSearchBar/type';
import { StyledSearchBar } from './styled';

export default function CustomSearchBar(
  props: Omit<searchbarProps, 'className' | 'spinner' | 'showSpinner'>
) {
  return <StyledSearchBar {...props} />;
}
