'use client';
import { useForm } from 'react-hook-form';
import { Box, InputAdornment, Typography } from '@mui/material';
import { ControledCheckbox } from '@/components/atoms/Checkbox';

import { StyledContainerInput } from './styled';
import { registrationStr } from '@/strings';
import { CustomButton } from '@/components/atoms/CustomButton';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';

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
              placeholder={registrationStr.username}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ margin: '0.625rem' }}>
                    <Icon icon="mdi:user" fontSize={24} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <CustomInput
              fullWidth
              control={control}
              name="input"
              variant="outlined"
              type="password"
              placeholder={registrationStr.roobinPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ margin: '0.625rem' }}>
                    <Icon icon="jam:key-f" fontSize={24} />
                  </InputAdornment>
                ),
              }}
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
