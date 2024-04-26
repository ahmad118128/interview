import { CustomFabButton } from '@/components/atoms/FabButton/FabButton/CustomFabButton';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="button">button</Typography>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomFabButton size="medium">asdasdasdasdasdad</CustomFabButton>
      </div>
    </>
  );
}
