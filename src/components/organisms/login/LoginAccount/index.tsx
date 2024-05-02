'use client';
import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { CustomButton } from '@/components/atoms/customButton';
import { ControledCheckbox } from '@/components/atoms/Checkbox';

import { StyledContainerInput } from './styled';
import { registrationStr } from '@/strings';

export const LoginAccount = () => {
  const { control } = useForm({
    mode: 'onChange',
  });

  return (
    <Box sx={{ marginTop: '2.5rem' }}>
      <form onSubmit={() => {}}>
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
            <Typography variant="body1">
              {registrationStr.remmeberMe}
            </Typography>
          </Box>
        </StyledContainerInput>
        <CustomButton className="loginButton">
          {registrationStr.login}
        </CustomButton>
      </form>
    </Box>
  );
};
