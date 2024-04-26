import { searchbarProps } from '../BaseSearchBar/type';
import { StyledSearchBar } from './styled';

export default function CustomSearchBar(
  props: Omit<searchbarProps, 'className' | 'spinner'>
) {
  return <StyledSearchBar {...props} />;
}
