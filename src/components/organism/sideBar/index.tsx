'use client';
import { StyledContainerSideBar } from '@/app/dashboard/styled';
import { CustomButton } from '@/components/atoms/CustomButton';
import { openDashboard } from '@/context/dashboardContext/dashboardContext';
import { TSidebarContext } from '@/context/dashboardContext/type';
import { Box, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import SideBarItem from './SideBarItem';

export default function SideBar() {
  const { isOpen, setIsOpen } = useContext(openDashboard) as TSidebarContext;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index); // Update the selected index
  };

  const sidebarList = [
    {
      title: 'دشبورد',
      icon: 'material-symbols:home-rounded',
    },
    {
      title: 'بانک اطلاعاتی',
      icon: 'material-symbols:database',
    },
    {
      title: 'لیست نظارتی',
      icon: 'material-symbols:patient-list-rounded',
    },
    {
      title: 'شناسایی تصویر',
      icon: 'mdi:user-search',
    },
    {
      title: 'گزارشات',
      icon: 'solar:clipboard-list-bold',
    },
    {
      title: 'آنالیز تردد',
      icon: 'mdi:report-box',
    },
    {
      title: 'کاربران',
      icon: 'mdi:users-group',
    },
    {
      title: 'تنظیمات',
      icon: 'ant-design:setting-filled',
    },
  ];
  function handleClick() {
    return setIsOpen(!isOpen);
  }

  return (
    <StyledContainerSideBar isOpen={isOpen}>
      <Box
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
        <List component="nav">
          {sidebarList.map((item, index) => {
            return (
              <>
                <SideBarItem
                  className={selectedIndex === index ? 'selected' : ''}
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  open={isOpen}
                  selected={selectedIndex === index}
                  onClick={() => handleListItemClick(index)}
                />
              </>
            );
          })}
        </List>
        <button onClick={handleClick}>click</button>
      </Box>
    </StyledContainerSideBar>
  );
}
