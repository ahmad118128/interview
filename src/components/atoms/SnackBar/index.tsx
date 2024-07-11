import { VFC } from 'react';
import { Snackbar } from '@mui/material';
import { Icon } from '@iconify/react';
import { StyledAlert } from './styled';
import { CustomSnackbarProps } from './type';

const SnackbarAutoHideDuration = 5000;

const CustomSnackbar = ({
  message,
  onClose,
  open,
  status,
}: CustomSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={SnackbarAutoHideDuration}
    >
      <StyledAlert
        onClose={onClose}
        iconMapping={{
          success: <Icon icon="tabler:circle-check" height={24} />,
          error: <Icon icon="tabler:alert-circle" height={24} />,
          info: <Icon icon="tabler:info-circle" height={24} />,
          warning: <Icon icon="tabler:alert-triangle" height={24} />,
        }}
        severity={status}
        variant="filled"
        action={
          <Icon
            icon="fe:close"
            onClick={onClose}
            cursor="pointer"
            height={24}
          />
        }
      >
        {message}
      </StyledAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
