'use client';
import { Box, Typography } from '@mui/material';
import { StyledContainerInput } from './styled';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { useForm } from 'react-hook-form';
import { CheckBox } from '@mui/icons-material';
import { CustomButton } from '@/components/atoms/customButton';
import { ControledCheckbox } from '@/components/atoms/Checkbox';

export const LoginAccount = (props: any) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  function handleSubmitt() {}
  return (
    <Box sx={{ marginTop: '40px' }}>
      <form onSubmit={handleSubmitt}>
        <StyledContainerInput>
          <Box>
            <CustomInput
              variant="outlined"
              fullWidth
              control={control}
              name="input"
              type="text"
            />
          </Box>
          <Box>
            <CustomInput
              fullWidth
              control={control}
              name="input"
              type="password"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ControledCheckbox name="checkbox" control={control} />
            <Typography variant="body1">مرا به خاطر بسپار</Typography>
          </Box>
        </StyledContainerInput>
        <CustomButton className="loginButton">Submit</CustomButton>
      </form>
    </Box>
  );
};
