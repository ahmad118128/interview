'use client';

import { useForm } from 'react-hook-form';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
  StyledGroupWrapper,
  StyledTextfieldWrapper,
} from './styled';
import { Box, Grid, Typography } from '@mui/material';
import { DataBankRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { useRouter } from 'next/navigation';
import { StyledFilterChild } from '../../image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { useState } from 'react';
import AddGropModal from './AddGropModal';
import UploaderInput from '@/components/organisms/UploaderInput';

export default function AddForm() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const submitHadler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  return (
    <>
      <StyledAddFormWrapper>
        <StyledAddFormHeader>
          <Typography variant="h2">
            {DataBankRoute.addSingleUserTitle}
          </Typography>
          <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
        </StyledAddFormHeader>
        <StyledAddFormMain>
          <form onSubmit={handleSubmit(submitHadler)}>
            <label>
              <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
                {DataBankRoute.personalInfo}
              </Typography>
            </label>
            <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="name"
                  fullWidth
                  label="name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="name"
                  fullWidth
                  label="name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="name"
                  fullWidth
                  label="name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="name"
                  fullWidth
                  label="name"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="phoneNumber"
                  fullWidth
                  label={DataBankRoute.phoneNumber}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <ControlledTimeDatePickerInput
                  name="group"
                  control={control}
                  label={DataBankRoute.group}
                  value={0}
                  onChange={() => console.log('first')}
                  rules={{ required: 'Require' }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="phoneNumber"
                  fullWidth
                  label={DataBankRoute.phoneNumber}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="phoneNumber"
                  fullWidth
                  label={DataBankRoute.phoneNumber}
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextfieldWrapper>
                  <label>
                    <Typography variant="h4">
                      {DataBankRoute.address}
                    </Typography>
                  </label>
                  <CustomTextArea
                    control={control}
                    name="texteara1"
                    placeholder={DataBankRoute.infoDialog}
                  />
                </StyledTextfieldWrapper>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextfieldWrapper>
                  <label>
                    <Typography variant="h4">
                      {DataBankRoute.information}
                    </Typography>
                  </label>
                  <CustomTextArea
                    control={control}
                    name="texteara1"
                    placeholder={DataBankRoute.infoDialog}
                  />
                </StyledTextfieldWrapper>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">
                  {DataBankRoute.generalKnowledge}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <StyledGroupWrapper>
                  <Box sx={{ flexGrow: 1 }}>
                    <CustomRHFAutocomplete
                      label={DataBankRoute.group}
                      control={control}
                      name="group"
                      options={[]}
                    />
                  </Box>
                  <IconButton
                    iconName="fluent:people-add-24-filled"
                    onClick={() => setIsOpen(true)}
                  />
                </StyledGroupWrapper>
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.group}
                  control={control}
                  name="group"
                  options={[]}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3">
                  {DataBankRoute.uploadImage}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <UploaderInput
                  control={control}
                  name={DataBankRoute.uploadImage}
                />
              </Grid>
            </StyledFilterChild>
          </form>
        </StyledAddFormMain>
      </StyledAddFormWrapper>
      <AddGropModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
