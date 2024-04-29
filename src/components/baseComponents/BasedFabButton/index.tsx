import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { EFabMode, IBasedFabButton } from './type';

export const BasedFabButton = (props: IBasedFabButton) => {
  const {
    disabled,
    variant,
    size,
    children,
    className,
    onClick,
    fabType,
    actions,
  } = props;
  return (
    <>
      {fabType === EFabMode.FAB && (
        <Fab
          disabled={disabled}
          variant={variant}
          size={size}
          className={className}
          onClick={onClick}
        >
          {children}
        </Fab>
      )}
      {fabType === EFabMode.SPEED_DIAL && (
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          className={className}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.onClick}
              className={className}
            />
          ))}
        </SpeedDial>
      )}
    </>
  );
};
