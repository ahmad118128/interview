'use client';

import { useForm } from 'react-hook-form';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
  StyledGroupWrapper,
} from './styled';
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { DataBankRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { useRouter } from 'next/navigation';
import { StyledFilterChild } from '../../image-recognition/FilterChild/styled';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { useState } from 'react';
import UploaderInput from '@/components/organisms/UploaderInput';
import { CustomButton } from '@/components/atoms/CustomButton';
import AddGroupModal from './AddGroupModal';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';

export default function AddGroupOfUser() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('uploadFile');

  const router = useRouter();
  const { control, handleSubmit, reset } = useForm();
  const submitHadler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  return (
    <>
      <StyledAddFormWrapper>
        <StyledAddFormHeader>
          <Typography variant="h2">{DataBankRoute.groupRegister}</Typography>

          <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
        </StyledAddFormHeader>

        <StyledAddFormMain>
          <form onSubmit={handleSubmit(submitHadler)}>
            <label>
              <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
                {DataBankRoute.generalKnowledge}
              </Typography>
            </label>

            <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
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
              <Grid item xs={12} md={12}>
                <CustomTextArea
                  label={DataBankRoute.information}
                  control={control}
                  name="texteara1"
                  placeholder={DataBankRoute.infoDialog}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="uploadFile"
                  name="radio-buttons-group"
                  value={selected}
                  onChange={(ev) => {
                    console.log(ev.target.value);
                    setSelected(ev.target.value);
                  }}
                  sx={{ width: '100%', paddingY: 0 }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'transparent',
                      margin: '0px !important',
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        margin: '0px !important',
                      }}
                    >
                      <FormControlLabel
                        value="uploadFile"
                        control={<Radio sx={{ paddingRight: '0' }} />}
                        label={DataBankRoute.uploadFile}
                        sx={{
                          marginRight: 0,
                          marginBottom: selected === 'uploadFile' ? '2rem' : 0,
                        }}
                      />
                      {/* <FilterIcon
                      onHandleIconClick={handleIconClick}
                      active={collapse}
                      /> */}
                      <Icon
                        icon="fluent:document-edit-20-filled"
                        width="24"
                        height="24"
                        color={theme.palette.primary.main}
                      />
                    </Box>
                    <Grid item xs={12} md={12}>
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          margin: '15px 0',
                          gap: '1rem',
                        }}
                      >
                        {selected === 'uploadFile' && (
                          <>
                            <CustomInput
                              control={control}
                              name="InputFile1"
                              fullWidth
                              sx={{ marginBottom: '2rem' }}
                              label={DataBankRoute.excelFile}
                              type="file"
                              InputProps={{
                                endAdornment: (
                                  <Icon
                                    icon="material-symbols:upload-rounded"
                                    width="20"
                                    height="20"
                                    className="uploadIcon"
                                  />
                                ),
                              }}
                            />
                            <CustomInput
                              control={control}
                              name="InputFile2"
                              fullWidth
                              sx={{ marginBottom: '2rem' }}
                              label={DataBankRoute.imageDirectory}
                              type="file"
                              InputProps={{
                                endAdornment: (
                                  <Icon
                                    icon="material-symbols:upload-rounded"
                                    width="20"
                                    height="20"
                                    className="uploadIcon"
                                  />
                                ),
                              }}
                            />
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Box>
                </RadioGroup>
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
              </Grid>
            </StyledFilterChild>
          </form>
        </StyledAddFormMain>
      </StyledAddFormWrapper>
      <AddGroupModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
