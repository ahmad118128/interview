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
import { drawerSidebarList, drawerSidebarSetting } from '@/constants';

export default function DrawerList({ setOpenDrawer }: DrawerListType) {
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
          {drawerSidebarList.map((item, index) => (
            <Link
              key={index}
              href={item.url ? `/dashboard/${item.url}` : '/dashboard'}
              style={{ textDecoration: 'none' }}
            >
              <ListItem disablePadding>
                {index < drawerSidebarList.length - 1 ? (
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
        <Link href={`/dashboard/${drawerSidebarSetting.url}`}>
          <ListItem disablePadding>
            <StyledListItemButtonSetting>
              <ListItemIcon sx={{ width: '2rem' }}>
                <Icon
                  width="24"
                  height="24"
                  icon={drawerSidebarSetting.icon}
                  color={theme.palette.common.white}
                />
              </ListItemIcon>
              <StyledLisItemText primary={drawerSidebarSetting.title} />
            </StyledListItemButtonSetting>
          </ListItem>
        </Link>
      </StyledBox>
    </>
  );
}
