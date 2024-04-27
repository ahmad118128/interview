import { Fab, FabProps } from '@mui/material';
import { IBasedFabButton } from './type';

export const BasedFabButton = (props: IBasedFabButton) => {
  const { disabled, variant, size, children,  className, onClick  } = props;
  return (
    <Fab disabled={disabled} variant={variant} size={size}  className={className} onClick={onClick}>
      {children}
    </Fab>
  );
};
