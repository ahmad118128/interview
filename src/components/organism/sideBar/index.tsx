'use client';
import { StyledContainerSideBar } from '@/app/dashboard/styled';
import { CustomButton } from '@/components/atoms/CustomButton';
import { SideBarItem } from '@/components/organism/sideBar/SideBarItem';
import { openDashboard } from '@/context/dashboardContext/dashboardContext';
import { TSidebarContext } from '@/context/dashboardContext/type';
import { Grid } from '@mui/material';
import { useContext, useState } from 'react';

export default function SideBar() {
  const [active, setActive] = useState('');

  const { isOpen, setIsOpen } = useContext(openDashboard) as TSidebarContext;

  function handleClick() {
    return setIsOpen(!isOpen);
  }

  function handleChange() {
    setActive('active');
  }
  return (
    <StyledContainerSideBar isOpen={isOpen}>
      <Grid
        container
        sx={{
          padding: '1rem',
          justifyContent: 'space-between',
          backgroundColor: 'yellow',
          height: '100%',
        }}
      >
        <Grid item xs={12}>
          <SideBarItem
            title="دشبورد"
            icon="material-symbols:home-rounded"
            open={isOpen}
          />
        </Grid>

        <Grid item xs={12}>
          <SideBarItem
            title="بانک اطلاعاتی"
            icon="material-symbols:database"
            open={isOpen}
          />
        </Grid>

        <Grid item xs={12}>
          <SideBarItem
            title="دشبورد"
            icon="material-symbols:home-rounded"
            open={isOpen}
            className={active}
            onClick={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton variant="contained" onClick={handleClick}>
            کلیک
          </CustomButton>
        </Grid>
      </Grid>
    </StyledContainerSideBar>
  );
}
