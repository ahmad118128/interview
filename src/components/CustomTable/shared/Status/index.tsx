import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { EStatus, type Props } from './types';
import theme from '@/theme';

export const Status = (props: Props) => {
  const { state, size = 8, color, style } = props;
  const [fillColor, setFillColor] = useState<string>('transparent');
  const cSize = size ? size / 2 : 4;

  useEffect(() => {
    if (color) {
      setFillColor(color);
    } else {
      state
        ? setFillColor(theme.palette.success.main)
        : setFillColor(theme.palette.error.main);
    }
  }, [state, color]);

  return (
    <Typography variant="body1" style={style}>
      <svg
        fill={fillColor}
        width={size}
        height={size}
        style={{ marginLeft: 7 }}
      >
        <circle cx={cSize} cy={cSize} r={cSize} />
      </svg>
      {state ? EStatus.ACTIVATE : EStatus.DEACTIVATE}
    </Typography>
  );
};
