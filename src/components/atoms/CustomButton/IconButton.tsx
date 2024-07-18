import { StyledIconButton } from './styled';
import { IconButtonProps } from './type';
import { Icon } from '@iconify/react';
import { CustomTooltip } from '../CustomTooltip';

export const IconButton = ({
  iconName,
  tooltip,
  size,
  disabled = false,
  ...restProps
}: IconButtonProps) => {
  return (
    <StyledIconButton disabled={disabled} size={size} {...restProps}>
      <CustomTooltip title={tooltip} placement="bottom">
        <Icon className="iconify" icon={iconName} height={24} width={24} />
      </CustomTooltip>
    </StyledIconButton>
  );
};
