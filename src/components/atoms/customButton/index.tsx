import { ButtonProps } from './type';
import { StyledButton } from './styled';
import { generalStr } from '@/strings';
import { Icon } from '@iconify/react';
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
        startIcon={
          <Icon
            icon="svg-spinners:3-dots-scale-middle"
            style={{ fontSize: '24px' }}
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
        <Icon
          icon="svg-spinners:3-dots-scale-middle"
          style={{ fontSize: '24px' }}
        />
      ) : (
        restProps.children
      )}
    </StyledButton>
  );
};
