'use client';
import { StyledFab } from './styled';
import { Icon } from '@iconify/react';
import { ICustomFab } from './type';

export const CustomFabButton = (props: ICustomFab) => {
  const { onClick, size, variant, disabled, className, fabType } = props;

  function handleClick() {
    console.log('you clicked');
  }

  const SDActions = [
    {
      icon: (
        <Icon
          icon="mdi:user"
          width="40px"
          height="40px"
          style={{ color: 'white' }}
        />
      ),
      name: 'icon-1',
      onClick: handleClick,
    },
    {
      icon: (
        <Icon
          icon="mdi:user"
          width="40px"
          height="40px"
          style={{ color: 'white' }}
        />
      ),
      name: 'icon-2',
      onClick: handleClick,
    },
  ];

  return (
    <StyledFab
      onClick={onClick}
      size={size}
      variant={variant}
      disabled={disabled}
      className={fabType}
      fabType={fabType}
      actions={SDActions}
    >
      <Icon icon="fluent:add-24-filled" style={{ color: 'white' }} />
    </StyledFab>
  );
};
