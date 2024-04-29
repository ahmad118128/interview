import { Tooltip, Typography } from '@mui/material';
import { IconTitleProps } from '../type';
import { StyledContainerIcon, StyledContainerIconTile } from '../styled';

export const IconTitle = (props: IconTitleProps) => {
  const { title, icon, onClick, open, className } = props;
  return (
    <Tooltip title={!open && title} placement="left" arrow>
      <StyledContainerIconTile
        className={className}
        open={open}
        onClick={onClick}
      >
        <StyledContainerIcon>{icon}</StyledContainerIcon>
        <Typography variant="h5" color="info.main">
          {title}
        </Typography>
      </StyledContainerIconTile>
    </Tooltip>
  );
};
