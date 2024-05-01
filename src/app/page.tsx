'use client';
import CustomSearchBar from '@/components/atoms/CustomSearchBar';
import { Box, Typography } from '@mui/material';
import { CustomTab } from '@/components/molecules/CustomTab/styled';
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
      <CustomTab
        type="buttonTab"
        data={[
          {
            id: 0,
            label: <div>تست1</div>,
            icon: 'gravity-ui:magnifier',
            tabPanel: <div>test1</div>,
          },
          { id: 1, label: 'تست2', tabPanel: <div>test2</div>, disabled: true },
          {
            id: 2,
            label: 'تست3',
            tabPanel: <div>test3</div>,
            icon: 'ion:filter',
          },
          { id: 3, label: 'تست4', tabPanel: <div>test4</div> },
        ]}
      />
      <CustomTab
        type="normalTab"
        data={[
          {
            id: 0,
            label: <div>تست1</div>,
            icon: 'ion:filter',
            tabPanel: <div>test1</div>,
          },
          { id: 1, label: 'تست2', tabPanel: <div>test2</div>, disabled: true },
          { id: 2, label: 'تست3', tabPanel: <div>test3</div> },
          { id: 3, label: 'تست4', tabPanel: <div>test4</div> },
        ]}
      />
      <Box>
        <CustomSearchBar
          searchHandler={(e) => console.log(e)}
          placeholder="جست و جو کنید"
        />
      </Box>

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
