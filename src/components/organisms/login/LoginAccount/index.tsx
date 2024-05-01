'use client';
import { Box } from '@mui/material';
import { StyledContainerInput } from './styled';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { useForm } from 'react-hook-form';
import { CheckBox } from '@mui/icons-material';
import { CustomButton } from '@/components/atoms/customButton';

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
    <form onSubmit={handleSubmitt}>
      <StyledContainerInput>
        <Box sx={{ width: '100% !important' }}>
          <CustomInput fullWidth control={control} name="input" type="text" />
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
            gap: '10px',
            // justifyContent: 'center',
          }}
        >
          <CheckBox name="input" />
          <p>Remember me !</p>
        </Box>
        <CustomButton className="loginButton">Submit</CustomButton>
      </StyledContainerInput>
    </form>
  );
};
