import { CustomTooltip } from '@/components/atoms/CustomTooltip';
import { HeaderIconButton } from './styled';
import { HeaderButtonProps } from './type';

export default function HeaderButton(props: HeaderButtonProps) {
  const { children, tooltipTitle, clickHandler } = props;
  return (
    <CustomTooltip
      title={tooltipTitle}
      arrow
      disableInteractive
      placement="bottom"
    >
      <HeaderIconButton disableRipple onClick={clickHandler}>
        {children}
      </HeaderIconButton>
    </CustomTooltip>
  );
}
