'use client';

import {
  DataBankRoute,
  generalStr,
  gpuServersString,
  registrationStr,
} from '@/strings';
import { Box, Grid, Typography } from '@mui/material';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomButton } from '@/components/atoms/CustomButton';
import { CustomPasswordInput } from '@/components/atoms/CustomInput/RHFPasswordInput';
import { useForm } from 'react-hook-form';
import {
  StyledAddFormHeaderProfile,
  StyledAddFormMainProfile,
  StyledAddFormWrapperProfile,
  StyledFilterChildProfile,
} from './styled';

export default function Profile() {
  const { control, handleSubmit } = useForm();
  const submitHadler = (data: any) => console.log(data);

  return (
    <StyledAddFormWrapperProfile>
      <StyledAddFormHeaderProfile>
        <Typography variant="h2">{generalStr.profile}</Typography>
      </StyledAddFormHeaderProfile>
      <StyledAddFormMainProfile>
        <form onSubmit={handleSubmit(submitHadler)}>
          <label>
            <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
              {DataBankRoute.personalInfo}
            </Typography>
          </label>

          <StyledFilterChildProfile container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="userName"
                fullWidth
                label={registrationStr.username}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomPasswordInput
                control={control}
                name="roobinPassword"
                fullWidth
                label={registrationStr.roobinPassword}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomPasswordInput
                control={control}
                name="repeatRoobinPassword"
                fullWidth
                label={registrationStr.repeatRoobinPassword}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="name"
                fullWidth
                label={generalStr.name}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="lastName"
                fullWidth
                label={generalStr.lastName}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="nationalId"
                fullWidth
                label={DataBankRoute.nationalId}
                type="number"
              />
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
                marginTop: '2rem',
              }}
            >
              <CustomButton type="submit" variant="contained">
                {generalStr.submit}
              </CustomButton>
              <CustomButton type="reset" variant="outlined">
                {generalStr.refuse}
              </CustomButton>
            </Box>
          </StyledFilterChildProfile>
        </form>
      </StyledAddFormMainProfile>
    </StyledAddFormWrapperProfile>
  );
}
