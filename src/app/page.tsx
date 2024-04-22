import { CustomTooltip } from '@/components/atoms/CustomTooltip';
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
      <CustomTooltip arrow title="title" placement="bottom-end" open>
        <div>BaseTooltip</div>
      </CustomTooltip>
    </>
  );
}
