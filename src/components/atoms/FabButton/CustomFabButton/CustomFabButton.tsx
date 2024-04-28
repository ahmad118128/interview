'use client';
import { StyledFab } from './styled';
import { Icon } from '@iconify/react';
import { ICustomFab } from './type';

export const CustomFabButton = (props: ICustomFab) => {
  const { onClick, size, variant, disabled, className, icon, type } = props;

  function handleClick() {
    console.log('you clicked');
  }

  const customIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.9543 31.5457 0 20.5 0C9.4543 0 0.5 8.9543 0.5 20C0.5 31.0457 9.4543 40 20.5 40ZM24.0355 17.5355C23.0979 18.4732 21.8261 19 20.5 19C19.1739 19 17.9021 18.4732 16.9645 17.5355C16.0268 16.5979 15.5 15.3261 15.5 14C15.5 12.6739 16.0268 11.4021 16.9645 10.4645C17.9021 9.52678 19.1739 9 20.5 9C21.8261 9 23.0979 9.52678 24.0355 10.4645C24.9732 11.4021 25.5 12.6739 25.5 14C25.5 15.3261 24.9732 16.5979 24.0355 17.5355ZM14.9088 22.8177C16.6448 21.9497 18.5592 21.4985 20.5 21.5C22.4408 21.4985 24.3552 21.9497 26.0912 22.8177C27.8271 23.6856 29.3367 24.9465 30.5 26.5C29.3367 28.0535 27.8271 29.3144 26.0912 30.1823C24.3552 31.0503 22.4408 31.5015 20.5 31.5C18.5592 31.5015 16.6448 31.0503 14.9088 30.1823C13.1729 29.3144 11.6633 28.0535 10.5 26.5C11.6633 24.9465 13.1729 23.6856 14.9088 22.8177Z"
        fill="#383838"
      />
    </svg>
  );

  const SDActions = [
    {
      icon: customIcon,
      name: 'icon-1',
      onClick: handleClick,
    },
    {
      icon: customIcon,
      name: 'icon-2',
      onClick: handleClick,
    },
  ];

  const addIcon = icon ? (
    <Icon icon="fluent:add-24-filled" style={{ color: 'white' }} />
  ) : (
    <></>
  );

  return (
    <StyledFab
      onClick={onClick}
      size={size}
      variant={variant}
      disabled={disabled}
      className={type}
      type={type}
      actions={SDActions}
    >
      {addIcon}
    </StyledFab>
  );
};
