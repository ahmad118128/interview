'use client';

import { Typography } from '@mui/material';
import { EFabMode } from '@/components/baseComponents/BasedFabButton/type';
import { CustomFabButton } from '@/components/atoms/CustomFabButton';
import { Icon } from '@iconify/react';

export default function Home() {
  function handleClick() {
    console.log('e');
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
          icon="mdi:users"
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
    <>
      <Typography variant="h1">تست</Typography>
      <Typography variant="h2">تست</Typography>
      <Typography variant="h3">تست</Typography>
      <Typography variant="h4">تست</Typography>
      <Typography variant="body1">تست</Typography>
      <Typography variant="body2">تست</Typography>
      <Typography variant="caption">تست</Typography>
      <Typography variant="button">تست</Typography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <CustomFabButton
          size="large"
          icon
          onClick={handleClick}
          fabType={EFabMode.SPEED_DIAL}
          action={SDActions}
        />
        <CustomFabButton
          size="large"
          icon
          onClick={handleClick}
          fabType={EFabMode.FAB}
        />
      </div>
    </>
  );
}
