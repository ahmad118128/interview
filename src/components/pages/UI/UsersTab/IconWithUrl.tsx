import { FC } from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { IconWithUrlProps } from './types';

const IconWithUrl: FC<IconWithUrlProps> = (props) => {
  const router = useRouter();

  const { iconName, disabled, url, onClick, title } = props;

  const handleOnClick = () => {
    if (url && !onClick) return router.push(url, undefined, { shallow: true });
    else if (!url && onClick) return onClick();
    else return null;
  };

  return (
    <IconButton
      disabled={disabled}
      title={title}
      size="small"
      onClick={handleOnClick}
      iconName={iconName}
    />
  );
};

export default IconWithUrl;
