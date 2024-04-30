'use client';
import { StyledFab } from './styled';
import { Icon } from '@iconify/react';
import { ICustomFab } from './type';

export const CustomFabButton = (props: ICustomFab) => {
  const { onClick, size, variant, disabled, className, fabType, action } =
    props;

  function handleClick() {
    console.log('you clicked');
  }

  return (
    <StyledFab
      onClick={onClick}
      size={size}
      variant={variant}
      disabled={disabled}
      className={fabType}
      fabType={fabType}
      actions={action}
    >
      <Icon icon="fluent:add-24-filled" style={{ color: 'white' }} />
    </StyledFab>
  );
};
