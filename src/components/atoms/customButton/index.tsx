import CircularProgress from '@mui/material/CircularProgress';
import { ButtonProps } from './type';
import { StyledButton } from './styled';
import { generalStr } from '@/strings';

export const Button = ({
  loadingText,
  loading,
  disabled,
  ...restProps
}: ButtonProps) => {
  if (loadingText) {
    return (
      <StyledButton
        {...restProps}
        disabled
        startIcon={
          <CircularProgress
            size="1.5rem"
            sx={{
              color: (theme) => theme.palette.grey[300],
              ml: '1rem',
            }}
          />
        }
      >
        {generalStr.processing}
      </StyledButton>
    );
  }

  return (
    <StyledButton {...restProps} disabled={loading || disabled}>
      {loading ? (
        <CircularProgress
          size="1.5rem"
          sx={{ color: (theme) => theme.palette.grey[300] }}
        />
      ) : (
        restProps.children
      )}
    </StyledButton>
  );
};
