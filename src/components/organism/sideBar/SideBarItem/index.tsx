import React, { useContext } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { IconTitleProps } from '../type';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';
import { StyledListItemButton } from '../styled';
import { openDashboard } from '@/context/dashboardContext/dashboardContext';
import { TSidebarContext } from '@/context/dashboardContext/type';

const SideBarItem = (props: IconTitleProps) => {
  const { title, icon, onClick, open, className, selected } = props;

  const { isOpen, setIsOpen } = useContext(openDashboard) as TSidebarContext;

  return (
    <CustomTooltip
      title={!isOpen && title}
      placement="bottom"
      arrow
      className="sideBarItemTooltip"
    >
      <StyledListItemButton
        onClick={onClick}
        className={className}
        sx={{
          justifyContent: isOpen ? 'flex-start' : 'center',
          gap: isOpen ? '0.5rem' : '0',
        }}
        selected={selected}
      >
        <ListItemIcon sx={{ justifyContent: 'center' }}>
          <Icon icon={icon} fontSize={24} className="iconSideBar" />
        </ListItemIcon>
        {open && (
          <ListItemText
            primary={<Typography variant="h3">{title}</Typography>}
          />
        )}
      </StyledListItemButton>
    </CustomTooltip>
  );
};

export default SideBarItem;
