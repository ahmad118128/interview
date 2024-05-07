'use client';
import { StyledContainerSideBar } from '@/app/dashboard/styled';
import { openDashboard } from '@/context/dashboardContext/dashboardContext';
import { TSidebarContext } from '@/context/dashboardContext/type';
import { Box, Divider, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import List from '@mui/material/List';
import SideBarItem from './SideBarItem';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { CustomButton } from '@/components/atoms/CustomButton';

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src="/assets/icons/roobinLogo/dashboardLogo.svg"
            alt=""
            width="56"
            height="56"
          />

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
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            marginBottom: isOpen ? '2rem' : '1.5rem',
            backgroundColor: theme.palette.common.white,
          }}
        >
          <Divider
            sx={{
              width: '100%',
              height: '1px',
              backgroundColor: theme.palette.grey[300],
            }}
          />

          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              lineHeight: 1.5,
              color: theme.palette.grey[300],
            }}
          >
            سیستم نظارت تصویری
          </Typography>

          <Typography
            variant="caption"
            sx={{
              textAlign: 'center',
              lineHeight: 1.5,
              color: theme.palette.grey[300],
            }}
          >
            نسخه 1.0
          </Typography>

          <Box
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              backgroundColor: theme.palette.grey[50],
              height: '32px',
              width: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.375rem',
            }}
          >
            {isOpen ? (
              <Icon
                icon="material-symbols:open-in-new-down-rounded"
                width="1.5rem"
                height="1.5rem"
                color={theme.palette.primary.light}
              />
            ) : (
              <Icon
                icon="ic:round-open-in-new"
                width="1.5rem"
                height="1.5rem"
                color={theme.palette.primary.light}
              />
            )}
          </Box>
        </Box>
      </Box>
    </StyledContainerSideBar>
  );
}
