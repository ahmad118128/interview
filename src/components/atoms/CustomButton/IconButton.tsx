import { Tooltip } from '@mui/material';
import { StyledIconButton } from './styled';
import { IconButtonProps } from './type';
import { Icon } from '@iconify/react';

export const IconButton = ({
  iconName,
  title,
  size,
  height,
  width,
  disabled = false,
  ...restProps
}: IconButtonProps) => {
  return (
    <StyledIconButton disabled={disabled} size={size} {...restProps}>
      <Tooltip
        title={title}
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'common.white',
              color: 'grey[300]',
              '& .MuiTooltip-arrow': {
                color: 'common.black',
              },
            },
          },
        }}
      >
        <Icon
          className="iconify"
          icon={iconName}
          height={height ? height : 16}
          width={width ? width : 16}
        />
      </Tooltip>
    </StyledIconButton>
  );
};
