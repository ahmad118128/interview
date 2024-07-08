import { Tooltip } from '@mui/material';
import { StyledIconButton } from './styled';
import { IconButtonProps } from './type';
import { Icon } from '@iconify/react';
import { CustomTooltip } from '../CustomTooltip';

export const IconButton = ({
  tabButton,
  iconName,
  title,
  size,
  height,
  width,
  disabled = false,
  className,
  ...restProps
}: IconButtonProps) => {
  return (
    <StyledIconButton
      disabled={disabled}
      size={size}
      {...restProps}
      className={tabButton ? 'tabButton' : className}
    >
      <CustomTooltip title={title} placement="bottom">
        <Icon
          className="iconify"
          icon={iconName}
          height={height ? height : 16}
          width={width ? width : 16}
        />
      </CustomTooltip>
    </StyledIconButton>
  );
};
