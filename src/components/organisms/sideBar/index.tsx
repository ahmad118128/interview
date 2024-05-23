'use client';
import { StyledContainerSideBar } from '@/app/dashboard/styled';
import { openDashboard } from '@/context/dashboardContext';
import { useContext, useState } from 'react';
import List from '@mui/material/List';
import SideBarItem from './SideBarItem';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import Link from 'next/link';
import {
  StyledDivider,
  StyledFooterOpen,
  StyledFooterSideBar,
  StyledNavWrapper,
  StyledTypography,
  StyledsideBarWrapper,
} from './styled';

export default function SideBar() {
  const { isOpen, setIsOpen } = useContext(openDashboard);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const sidebarList = [
    {
      title: 'دشبورد',
      icon: 'material-symbols:home-rounded',
    },
    {
      title: 'بانک اطلاعاتی',
      icon: 'material-symbols:database',
      url: 'data-bank',
    },
    {
      title: 'لیست نظارتی',
      icon: 'material-symbols:patient-list-rounded',
      url: 'supervisitory-list',
    },
    {
      title: 'شناسایی تصویر',
      icon: 'mdi:user-search',
      url: 'image-recognition',
    },
    {
      title: 'گزارشات',
      icon: 'solar:clipboard-list-bold',
      url: 'report',
    },
    {
      title: 'آنالیز تردد',
      icon: 'mdi:report-box',
      url: 'traffic-analysis',
    },
    {
      title: 'کاربران',
      icon: 'mdi:users-group',
      url: 'user-managment',
    },
    {
      title: 'تنظیمات',
      icon: 'ant-design:setting-filled',
      url: 'setting',
    },
  ];

  return (
    <StyledContainerSideBar isOpen={isOpen}>
      <StyledsideBarWrapper>
        <StyledNavWrapper>
          <Image
            src="/assets/icons/roobinLogo/dashboardLogo.svg"
            alt=""
            width="56"
            height="56"
          />

          <List component="nav" sx={{ paddingY: '2rem' }}>
            {sidebarList.map((item, index) => {
              return (
                <>
                  <Link
                    key={index}
                    href={item.url ? `/dashboard/${item.url}` : '/dashboard'}
                  >
                    <SideBarItem
                      className={selectedIndex === index ? 'selected' : ''}
                      title={item.title}
                      icon={item.icon}
                      open={isOpen}
                      selected={selectedIndex === index}
                      onClick={() => handleListItemClick(index)}
                    />
                  </Link>
                </>
              );
            })}
          </List>
        </StyledNavWrapper>

        <StyledFooterSideBar isOpen={isOpen}>
          <StyledDivider />

          <StyledTypography variant="caption">
            سیستم نظارت تصویری
          </StyledTypography>

          <StyledTypography variant="caption">نسخه 1.0</StyledTypography>

          <StyledFooterOpen onClick={() => setIsOpen(!isOpen)}>
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
          </StyledFooterOpen>
        </StyledFooterSideBar>
      </StyledsideBarWrapper>
    </StyledContainerSideBar>
  );
}
