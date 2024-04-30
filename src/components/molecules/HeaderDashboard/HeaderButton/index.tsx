import { CustomTooltip } from '@/components/atoms/CustomTooltip';
import { ActionButton } from '../styled';
import { MobileButton } from './styled';
import { HeaderButtonProps } from './type';

export default function HeaderButton(props: HeaderButtonProps) {
  const { children, tooltipTitle, mode, clickHandler } = props;
  return (
    <CustomTooltip
      title={tooltipTitle}
      arrow
      disableInteractive
      placement="bottom"
    >
      {mode === 'mobile' ? (
        <MobileButton disableRipple onClick={clickHandler}>
          {children}
        </MobileButton>
      ) : (
        <ActionButton disableRipple onClick={clickHandler}>
          {children}
        </ActionButton>
      )}
    </CustomTooltip>
  );
}
