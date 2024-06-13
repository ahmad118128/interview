import { Box, Radio } from '@mui/material';
import { BaseInputRadio } from './type';

export const BaseRadioButton = (props: BaseInputRadio) => {
  const { className, ...rest } = props;

  return (
    <Box className={className}>
      <Radio {...rest} />
    </Box>
  );
};
