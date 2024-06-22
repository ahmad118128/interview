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
  StyledSpacingFlex,
  StyledTypography,
  StyledsideBarWrapper,
} from './styled';
import { sidebarList } from '@/constants';

export default function SideBar() {
  const { isOpen, setIsOpen } = useContext(openDashboard);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <StyledContainerSideBar isOpen={isOpen}>
      <StyledSpacingFlex>
        <StyledsideBarWrapper>
          <Image
            src="/assets/icons/roobinLogo/dashboardLogo.svg"
            alt="dashboardLogo"
            width="56"
            height="56"
          />
          <StyledNavWrapper>
            <List component="nav" sx={{ width: '100%' }}>
              {sidebarList.map((item, index) => {
                return (
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
                );
              })}
            </List>
          </StyledNavWrapper>
        </StyledsideBarWrapper>

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
      </StyledSpacingFlex>
    </StyledContainerSideBar>
  );
}
