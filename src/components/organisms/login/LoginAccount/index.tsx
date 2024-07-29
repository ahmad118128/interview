'use client';

import { useForm } from 'react-hook-form';
import { Box, InputAdornment, Typography } from '@mui/material';
import { ControledCheckbox } from '@/components/atoms/Checkbox';

import { StyledContainerInput } from './styled';
import { registrationStr } from '@/strings';
import { CustomButton } from '@/components/atoms/CustomButton';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { LoginFormValues } from './type';
import { usePostLogin } from '@/services/api/auth/usePostAuth';
import { useRouter } from 'next/navigation';

export const LoginAccount = () => {
  const { control, handleSubmit } = useForm<any>();
  const { login, isPending } = usePostLogin();
  const router = useRouter();

  const onLogin = (data: LoginFormValues) => {
    login(data, {
      onSuccess: (userResponse) => {
        const { role, username } = userResponse;
        window?.localStorage?.setItem(
          'userSession',
          JSON.stringify({ role, username })
        );
        router.push('/dashboard');
      },
    });
  };

  return (
    <Box sx={{ marginTop: '2.5rem' }}>
      <form onSubmit={handleSubmit(onLogin)}>
        <StyledContainerInput>
          <Box>
            <CustomInput
              variant="outlined"
              fullWidth
              control={control}
              name="username"
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
              name="password"
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
            <ControledCheckbox name="rememberMe" control={control} />
            <Typography variant="body1">
              {registrationStr.remmeberMe}
            </Typography>
          </Box>
        </StyledContainerInput>
        <CustomButton className="loginButton" type="submit" loading={isPending}>
          {registrationStr.login}
        </CustomButton>
        {/* {loginState?.error && (
          <Typography mt="1rem" variant="subtitle2" color="error.main">
            {loginState?.error}
          </Typography>
        )} */}
      </form>
    </Box>
  );
};
