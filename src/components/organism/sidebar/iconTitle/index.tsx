import { Typography } from '@mui/material';
import { IconTitleProps } from '../type';
import { StyledContainerIcon, StyledContainerIconTile } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';
export const IconTitle = (props: IconTitleProps) => {
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
        open={open}
        onClick={onClick}
      >
        <StyledContainerIcon>
          <Icon icon={icon} fontSize={24} className="iconSideBar" />
        </StyledContainerIcon>
        {open && title ? (
          <Typography variant="h3" className="titleSideBar">
            {title}
          </Typography>
        ) : (
          ''
        )}
      </StyledContainerIconTile>
    </CustomTooltip>
  );
};
