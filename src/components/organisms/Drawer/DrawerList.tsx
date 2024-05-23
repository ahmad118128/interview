'use client';
import theme from '@/theme';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import { Dispatch } from 'react';

export default function DrawerList({
  setOpenDrawer,
}: {
  setOpenDrawer: Dispatch<boolean>;
}) {
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
      <IconButton
        onClick={() => setOpenDrawer(false)}
        sx={{ alignSelf: 'flex-end', padding: 0 }}
      >
        <Icon
          icon="iwwa:delete"
          width="24"
          height="24"
          style={{ color: theme.palette.common.white }}
        />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <List sx={{ padding: 0, marginTop: '1.5rem' }}>
          {sidebarList.map((item, index) => (
            <Link
              key={index}
              href={item.url ? `/dashboard/${item.url}` : '/dashboard'}
            >
              <ListItem disablePadding>
                {index < sidebarList.length - 1 ? (
                  <ListItemButton
                    sx={{
                      padding: '1rem 0.75rem',
                      borderBottom: `0.1px solid ${theme.palette.primary.light}`,
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
                    <ListItemText
                      primary={item.title}
                      sx={{ textAlign: 'right' }}
                    />
                  </ListItemButton>
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
                    <ListItemText
                      primary={item.title}
                      sx={{ textAlign: 'right' }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
            </Link>
          ))}
        </List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              padding: '1rem 0.75rem',
              justifySelf: 'flex-end',
              justifyContent: 'end',
            }}
          >
            <ListItemIcon sx={{ width: '2rem' }}>
              <Icon
                width="24"
                height="24"
                icon={setting.icon}
                color={theme.palette.common.white}
              />
            </ListItemIcon>
            <ListItemText primary={setting.title} sx={{ textAlign: 'right' }} />
          </ListItemButton>
        </ListItem>
      </Box>
    </>
  );
}
