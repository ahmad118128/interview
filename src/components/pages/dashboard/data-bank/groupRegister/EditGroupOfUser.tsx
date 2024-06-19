'use client';

import { useForm, FieldValues } from 'react-hook-form';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '../usersList/styled';
import { Box, Grid, Typography } from '@mui/material';
import { DataBankRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { useRouter } from 'next/navigation';
import { StyledFilterChild } from '../../image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomButton } from '@/components/atoms/CustomButton';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';

export default function EditGroupOfUser() {
  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      groupName: 'نام گروه',
      texteara1: 'متن پیش فرض',
    },
  });
  const submitHadler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  return (
    <>
      <StyledAddFormWrapper>
        <StyledAddFormHeader>
          <Typography variant="h2">
            {DataBankRoute.addGroupFormTitle}
          </Typography>

          <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
        </StyledAddFormHeader>

        <StyledAddFormMain>
          <form onSubmit={handleSubmit(submitHadler)}>
            <label>
              <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
                {DataBankRoute.groupInformation}
              </Typography>
            </label>

            <StyledFilterChild
              container
              spacing={{ xs: 0, md: 4 }}
              alignItems="flex-end"
            >
              <Grid item xs={12} md={6}>
                <CustomInput
                  control={control}
                  name="groupName"
                  fullWidth
                  label={DataBankRoute.groupName}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomTextArea
                  label={DataBankRoute.address}
                  control={control}
                  name="texteara1"
                  placeholder={DataBankRoute.infoDialog}
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
                  {DataBankRoute.earase}
                </CustomButton>
              </Box>
            </StyledFilterChild>
          </form>
        </StyledAddFormMain>
      </StyledAddFormWrapper>
    </>
  );
}
