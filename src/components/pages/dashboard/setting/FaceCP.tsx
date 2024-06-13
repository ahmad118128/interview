'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { DataBankRoute, SettingRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomButton } from '@/components/atoms/CustomButton';

import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '../data-bank/usersList/styled';
import { StyledFilterChild } from '../image-recognition/FilterChild/styled';
import { CustomRadioButton } from '@/components/atoms/CustomRadioButton';

export function FaceCP() {
  const [selected, setSelected] = useState('doNotRecordFaces');

  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const submitHadler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  return (
    <StyledAddFormWrapper>
      <StyledAddFormHeader>
        <Typography variant="h2">{SettingRoute.face}</Typography>

        <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
      </StyledAddFormHeader>

      <StyledAddFormMain>
        <form onSubmit={handleSubmit(submitHadler)}>
          <label>
            <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
              {SettingRoute.faceRecognitionThroughClient}
            </Typography>
          </label>

          <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={3}>
              <CustomInput
                control={control}
                name="minimumSimilarityPercent"
                fullWidth
                label={SettingRoute.minimumSimilarityPercent}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3">
                {SettingRoute.entryAndExitStatus}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="minimumSimilarityPercent"
                fullWidth
                label={SettingRoute.minimumSimilarityPercent}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="minimumPassingTime"
                fullWidth
                label={SettingRoute.minimumPassingTime}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="maximumPassingTime"
                fullWidth
                label={SettingRoute.maximumPassingTime}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3">
                {SettingRoute.facesRecordStatus}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={selected}
                onChange={(ev) => {
                  console.log(ev.target.value);
                  setSelected(ev.target.value);
                }}
                sx={{
                  width: '100%',
                  paddingY: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <FormControlLabel
                  value="doNotRecordFaces"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.doNotRecordFaces}
                />

                <FormControlLabel
                  value="justRecordMatchedFaces"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.justRecordMatchedFaces}
                />

                <FormControlLabel
                  value="passingFacesRecord"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.passingFacesRecord}
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3">
                {SettingRoute.recordFaceParameters}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="minimumFaceWidth"
                fullWidth
                label={SettingRoute.minimumFaceWidth}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="maximumFaceWidth"
                fullWidth
                label={SettingRoute.maximumFaceWidth}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="minimumFaceConfidenceFactor"
                fullWidth
                label={SettingRoute.minimumFaceConfidenceFactor}
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '1.25rem' }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                }}
              >
                <CustomButton type="submit">{DataBankRoute.add}</CustomButton>
                <CustomButton type="reset" variant="outlined">
                  {SettingRoute.refuse}
                </CustomButton>
                <CustomButton variant="outlined">
                  {SettingRoute.defaultMode}
                </CustomButton>
              </Box>
            </Grid>
          </StyledFilterChild>
        </form>
      </StyledAddFormMain>
    </StyledAddFormWrapper>
  );
}
