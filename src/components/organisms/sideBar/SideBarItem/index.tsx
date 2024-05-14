import React, { useContext } from 'react';
import { ListItemIcon, ListItemText, Typography } from '@mui/material';
import { IconTitleProps } from '../type';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';
import { StyledListItemButton } from '../styled';
import { openDashboard } from '@/context/dashboardContext';

const SideBarItem = (props: IconTitleProps) => {
  const { title, icon, onClick, open, className, selected } = props;

  const { isOpen } = useContext(openDashboard);

  return (
    <CustomTooltip
      title={!isOpen && title}
      placement="bottom"
      arrow
      className="sideBarItemTooltip"
    >
      <StyledListItemButton
        isOpen={isOpen}
        onClick={onClick}
        className={className}
        selected={selected}
      >
        <ListItemIcon>
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
