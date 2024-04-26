import { StyledFab } from './styled';

export const CustomFabButton = (props: any) => {
  return (
    <StyledFab size={props.size} variant={props.variant}>
      {props.children}
    </StyledFab>
  );
};
