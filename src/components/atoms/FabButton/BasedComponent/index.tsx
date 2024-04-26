import { Fab } from '@mui/material';

export const BasedFabButton = (props: any) => {
  const { disabled, variant, size, children } = props;
  return (
    <Fab disabled={disabled} variant={variant} size={size}>
      {children}
    </Fab>
  );
};
