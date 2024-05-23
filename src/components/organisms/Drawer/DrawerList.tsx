'use client';
import { DrawerListType } from '@/app/types';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import Link from 'next/link';
import {
  StyledBox,
  StyledIconButton,
  StyledLisItemText,
  StyledList,
  StyledListItemButton,
  StyledListItemButtonSetting,
} from './styled';

export default function DrawerList({ setOpenDrawer }: DrawerListType) {
  const sidebarList = [
    {
      title: 'دشبورد',
      icon: 'material-symbols:home-rounded',
    },
    {
      title: 'بانک اطلاعاتی',
      icon: 'material-symbols:database',
      url: 'dataBank',
    },
    {
      title: 'لیست نظارتی',
      icon: 'material-symbols:patient-list-rounded',
      url: 'supervisitoryList',
    },
    {
      title: 'شناسایی تصویر',
      icon: 'mdi:user-search',
      url: 'imageRecognition',
    },
    {
      title: 'گزارشات',
      icon: 'solar:clipboard-list-bold',
      url: 'report',
    },
    {
      title: 'آنالیز تردد',
      icon: 'mdi:report-box',
      url: 'trafficAnalysis',
    },
    {
      title: 'کاربران',
      icon: 'mdi:users-group',
      url: 'userManagment',
    },
  ];

  const setting = {
    title: 'تنظیمات',
    icon: 'ant-design:setting-filled',
    url: 'setting',
  };

  return (
    <>
      <StyledIconButton onClick={() => setOpenDrawer(false)}>
        <Icon
          icon="iwwa:delete"
          width="24"
          height="24"
          style={{ color: theme.palette.common.white }}
        />
      </StyledIconButton>
      <StyledBox>
        <StyledList>
          {sidebarList.map((item, index) => (
            <Link
              key={index}
              href={item.url ? `/dashboard/${item.url}` : '/dashboard'}
              style={{ textDecoration: 'none' }}
            >
              <ListItem disablePadding>
                {index < sidebarList.length - 1 ? (
                  <StyledListItemButton>
                    <ListItemIcon sx={{ width: '2rem' }}>
                      <Icon
                        width="24"
                        height="24"
                        icon={item.icon}
                        color={theme.palette.common.white}
                      />
                    </ListItemIcon>
                    <StyledLisItemText primary={item.title} />
                  </StyledListItemButton>
                ) : (
                  <ListItemButton
                    sx={{
                      padding: '1rem 0.75rem',
                    }}
                  >
                    <ListItemIcon sx={{ width: '2rem' }}>
                      <Icon
                        width="24"
                        height="24"
                        icon={item.icon}
                        color={theme.palette.common.white}
                      />
                    </ListItemIcon>
                    <StyledLisItemText primary={item.title} />
                  </ListItemButton>
                )}
              </ListItem>
            </Link>
          ))}
        </StyledList>
        <Link href="/dashboard/setting">
          <ListItem disablePadding>
            <StyledListItemButtonSetting>
              <ListItemIcon sx={{ width: '2rem' }}>
                <Icon
                  width="24"
                  height="24"
                  icon={setting.icon}
                  color={theme.palette.common.white}
                />
              </ListItemIcon>
              <StyledLisItemText primary={setting.title} />
            </StyledListItemButtonSetting>
          </ListItem>
        </Link>
      </StyledBox>
    </>
  );
}
