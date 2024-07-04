'use client';

import { useForm } from 'react-hook-form';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
  StyledGroupWrapper,
} from '@/components/template/FilterContainer/styled';
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
import { CustomButton } from '@/components/atoms/CustomButton';

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
                  name="firstName"
                  fullWidth
                  label={DataBankRoute.firstName}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="lastName"
                  fullWidth
                  label={DataBankRoute.lastName}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="fatherName"
                  fullWidth
                  label={DataBankRoute.fatherName}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="nationalId"
                  fullWidth
                  label={DataBankRoute.nationalId}
                  type="number"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="birthCertificateNumber"
                  fullWidth
                  label={DataBankRoute.birthCertificateNumber}
                  type="number"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.placeOfIssue}
                  control={control}
                  name="placeOfIssue"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.birthCity}
                  control={control}
                  name="birthCity"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <ControlledTimeDatePickerInput
                  name="birthDate"
                  control={control}
                  label={DataBankRoute.birthDate}
                  value={0}
                  onChange={() => console.log('first')}
                  rules={{ required: 'Require' }}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.sex}
                  control={control}
                  name="sex"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.education}
                  control={control}
                  name="education"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="phone"
                  fullWidth
                  label={DataBankRoute.phone}
                  type="number"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <CustomInput
                  control={control}
                  name="mobile"
                  fullWidth
                  label={DataBankRoute.mobile}
                  type="number"
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

              <Grid item xs={12} md={6}>
                <CustomTextArea
                  label={DataBankRoute.information}
                  control={control}
                  name="texteara1"
                  placeholder={DataBankRoute.infoDialog}
                />
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
                      label={DataBankRoute.groupName}
                      control={control}
                      name="groupName"
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
                  label={DataBankRoute.nationality}
                  control={control}
                  name="nationality"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomRHFAutocomplete
                  label={DataBankRoute.supervisoryList}
                  control={control}
                  name="supervisortList"
                  options={[]}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h3">
                  {DataBankRoute.uploadImage}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <UploaderInput control={control} name={'uploadImage'} />
              </Grid>

              <Grid item xs={12} sx={{ marginTop: '1.25rem' }}>
                <CustomButton fullWidth type="submit">
                  {DataBankRoute.add}
                </CustomButton>
              </Grid>
            </StyledFilterChild>
          </form>
        </StyledAddFormMain>
      </StyledAddFormWrapper>
      <AddGropModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
