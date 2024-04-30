import { Typography } from '@mui/material';
import { IconTitleProps } from '../type';
import { StyledContainerIconTile } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';

export const SideBarItem = (props: IconTitleProps) => {
  const { title, icon, onClick, open, className } = props;

  return (
    <CustomTooltip
      title={!open && title}
      placement="bottom"
      arrow
      className="sideBarItemTooltip"
    >
      <StyledContainerIconTile
        className={className}
        label={open}
        onClick={onClick}
        sx={{ justifyContent: open ? 'flex-start' : 'center' }}
      >
        <Icon icon={icon} fontSize={24} className="iconSideBar" />

        {open && title && (
          <Typography variant="h3" className="titleSideBar">
            {title}
          </Typography>
        )}
      </StyledContainerIconTile>
    </CustomTooltip>
  );
};
