'use client';

import { useForm, FieldValues } from 'react-hook-form';
import { Box, Grid, Typography } from '@mui/material';
import { DataBankRoute, SettingRoute, siderBarList } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomButton } from '@/components/atoms/CustomButton';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '@/components/template/FilterContainer/styled';
import { StyledFilterChild } from '../image-recognition/FilterChild/styled';
import { useCallback } from 'react';

export default function EditClient() {
  const router = useRouter();
  const currentPath = usePathname();

  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      clientAddress: 'متن ورودی',
      clientStatus: 'متن ورودی',
      factoryName: 'متن ورودی',
      stationName: 'متن ورودی',
      recordFrameStatus: 'متن ورودی',
      supervisitoryList: 'متن ورودی',
    },
  });
  const submitHadler = (data: any) => console.log(data);

  const urlArray = Array.from(currentPath.split('/'));
  const clientId = urlArray[urlArray.length - 1];

  const goBackUrl = () => {
    router.back();
  };

  return (
    <>
      <StyledAddFormWrapper>
        <StyledAddFormHeader>
          <Box sx={{ display: 'flex', gap: '0.25rem' }}>
            <Typography variant="h2">{SettingRoute.client}</Typography>

            <Typography variant="h2">{clientId}</Typography>
          </Box>

          <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
        </StyledAddFormHeader>

        <StyledAddFormMain>
          <form onSubmit={handleSubmit(submitHadler)}>
            <label>
              <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
                {SettingRoute.editClient}
              </Typography>
            </label>

            <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
              <Grid item xs={12} md={4}>
                <CustomInput
                  control={control}
                  name="clientAddress"
                  fullWidth
                  label={SettingRoute.clientAddress}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={SettingRoute.clientStatus}
                  control={control}
                  name="clientStatus"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomInput
                  control={control}
                  name="factoryName"
                  fullWidth
                  label={SettingRoute.factoryName}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomInput
                  control={control}
                  name="stationName"
                  fullWidth
                  label={SettingRoute.stationName}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={SettingRoute.recordFrameStatus}
                  control={control}
                  name="recordFrameStatus"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={siderBarList.supervisitoryList}
                  control={control}
                  name="supervisitoryList"
                  options={[]}
                />
              </Grid>

              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginTop: '2rem',
                }}
              >
                <CustomButton variant="contained" type="submit">
                  {DataBankRoute.submit}
                </CustomButton>
                <CustomButton variant="outlined" onClick={() => reset()}>
                  {DataBankRoute.cancel}
                </CustomButton>
              </Box>
            </StyledFilterChild>
          </form>
        </StyledAddFormMain>
      </StyledAddFormWrapper>
    </>
  );
}
