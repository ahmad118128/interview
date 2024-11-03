'use client';

import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import CustomBox from './CustomBox';
import Input from './Input';

const CheckboxForm = () => {
  const { control, watch } = useForm({
    defaultValues: Array.from({ length: 16 }, (_, i) => ({
      [`${i + 1}`]: false,
    })),
  });

  const watchAllFields = watch();

  const getXsValue = () => {
    let xsValue = 0;
    const checkedFieldsLength = Object.values(watchAllFields).filter(
      (value) => value
    ).length;

    switch (checkedFieldsLength) {
      case 1:
        xsValue = 12;
        break;
      case 2:
        xsValue = 6;
        break;
      case 3:
        xsValue = 4;
        break;
      case 4:
        xsValue = 6;
        break;
      default:
        xsValue = 3;
    }

    return xsValue;
  };

  return (
    <Grid container>
      <Grid item xs={1} sx={{ backgroundColor: 'pink', height: '100vh' }}>
        {Array.from({ length: 16 }, (_, i) => (
          <Box key={i} sx={{ width: '100%' }}>
            <Input name={`${i + 1}`} control={control} label={i + 1} />
          </Box>
        ))}
      </Grid>

      <Grid
        item
        container
        xs={11}
        sx={{ backgroundColor: 'cyan', height: '100vh' }}
      >
        {Object.entries(watchAllFields)
          .filter(([_, isChecked]) => isChecked)
          .map(([number], i) => {
            return (
              <Grid
                key={i}
                item
                xs={getXsValue()}
                display="flex"
                flexWrap="wrap"
                justifyContent="start"
                alignItems="start"
                gap={5}
              >
                <CustomBox title={number} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default CheckboxForm;
