import { Typography } from '@mui/material';
import { IconTitleProps } from '../type';
import { StyledContainerIconTile } from '../styled';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomTooltip } from '@/components/atoms/CustomTooltip';

export const IconTitle = (props: IconTitleProps) => {
  const { title, icon, onClick, label, className } = props;

  return (
    <CustomTooltip
      title={!label && title}
      placement="bottom"
      arrow
      className="sideBarItemTooltip"
    >
      <StyledContainerIconTile
        className={className}
        label={label}
        onClick={onClick}
        sx={{ justifyContent: label ? 'flex-start' : 'center' }}
      >
        <Icon icon={icon} fontSize={24} className="iconSideBar" />

        {label && title && (
          <Typography variant="h3" className="titleSideBar">
            {title}
          </Typography>
        )}
      </StyledContainerIconTile>
    </CustomTooltip>
  );
};
