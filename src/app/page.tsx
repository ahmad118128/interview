import { CustomCheckbox } from '@/components/atoms/Checkbox';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Typography } from '@mui/material';

export default function Home() {
  function handleClick() {
    console.log('e');
  }

  const SDActions = [
    {
      icon: (
        <Icon
          icon="mdi:user"
          width="40px"
          height="40px"
          style={{ color: 'white' }}
        />
      ),
      name: 'icon-1',
      onClick: handleClick,
    },
    {
      icon: (
        <Icon
          icon="mdi:users"
          width="40px"
          height="40px"
          style={{ color: 'white' }}
        />
      ),
      name: 'icon-2',
      onClick: handleClick,
    },
  ];

  return (
    <>
      <Typography variant="h1">تست</Typography>
      <Typography variant="h2">تست</Typography>
      <Typography variant="h3">تست</Typography>
      <Typography variant="h4">تست</Typography>
      <Typography variant="body1">تست</Typography>
      <Typography variant="body2">تست</Typography>
      <Typography variant="caption">تست</Typography>
      <Typography variant="button">تست</Typography>
      <CustomCheckbox />
    </>
  );
}
