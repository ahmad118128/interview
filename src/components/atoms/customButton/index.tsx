import { ButtonProps } from './type';
import { StyledButton } from './styled';
import { generalStr } from '@/strings';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const Button = ({
  loadingText,
  loading,
  disabled,
  ...restProps
}: ButtonProps) => {
  if (loadingText) {
    return (
      <StyledButton {...restProps} startIcon={<MoreHorizIcon />}>
        {generalStr.processing}
      </StyledButton>
    );
  }

  return (
    <StyledButton {...restProps} disabled={disabled}>
      {loading ? <MoreHorizIcon /> : restProps.children}
    </StyledButton>
  );
};
