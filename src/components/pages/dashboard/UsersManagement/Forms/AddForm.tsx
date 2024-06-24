'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
} from '@mui/material';
import {
  DataBankRoute,
  SupervisitoryListRoute,
  UsersManagementRoute,
  commonWords,
  generalStr,
  gpuServersString,
  registrationStr,
} from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { CustomRHFAutocomplete } from '@/components/atoms/Autocomplete';
import { CustomTextArea } from '@/components/atoms/CustomTextarea/CustomTextarea';
import { CustomButton } from '@/components/atoms/CustomButton';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import {
  StyledAddFormHeader,
  StyledAddFormMain,
  StyledAddFormWrapper,
} from '../../data-bank/usersList/styled';
import { StyledFilterChild } from '../../image-recognition/FilterChild/styled';
import {
  supervisitoryListMembersHeader,
  supervisitoryListMembersMock,
} from '../../supervisory-list/constants';
import { COLLAPSE_ID } from '../../image-recognition/constants';
import { IError, ISuccess } from '../../image-recognition/types';
import { CustomPasswordInput } from '@/components/atoms/CustomInput/RHFPasswordInput';
import { ControledCheckbox } from '@/components/atoms/Checkbox';
import theme from '@/theme';
import { StyledBox } from './styled';

export function AddFormUsers() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const { control, handleSubmit, reset } = useForm();
  const submitHadler = (data: any) => console.log(data);

  const goBackUrl = () => {
    router.back();
  };

  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };

  return (
    <StyledAddFormWrapper>
      <StyledAddFormHeader>
        <Typography variant="h2">{commonWords.addUser}</Typography>

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
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="userName"
                fullWidth
                label={gpuServersString.userName}
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

            <Grid item xs={12}>
              <Typography variant="h3">
                {UsersManagementRoute.accessingPanelState}
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
            >
              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {DataBankRoute.usersList}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="addPerson"
                  label={UsersManagementRoute.addPerson}
                />

                <ControledCheckbox
                  control={control}
                  name="editPerson"
                  label={UsersManagementRoute.editPerson}
                />

                <ControledCheckbox
                  control={control}
                  name="deletePerson"
                  label={UsersManagementRoute.deletePerson}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {commonWords.groupsList}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="addGroup"
                  label={DataBankRoute.addGropModalTitle}
                />

                <ControledCheckbox
                  control={control}
                  name="editGroup"
                  label={commonWords.editGroup}
                />

                <ControledCheckbox
                  control={control}
                  name="deleteGroup"
                  label={UsersManagementRoute.deleteGroup}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {DataBankRoute.supervisoryList}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="addList"
                  label={UsersManagementRoute.addList}
                />

                <ControledCheckbox
                  control={control}
                  name="editList"
                  label={UsersManagementRoute.editList}
                />

                <ControledCheckbox
                  control={control}
                  name="deleteList"
                  label={UsersManagementRoute.deleteList}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {UsersManagementRoute.passingPeopleImageRecognition}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="registeredPeopleImageRecognition"
                  label={UsersManagementRoute.registeredPeopleImageRecognition}
                />

                <ControledCheckbox
                  control={control}
                  name="passingPeopleImageRecognition"
                  label={UsersManagementRoute.passingPeopleImageRecognition}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {UsersManagementRoute.reports}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="passingPeopleReport"
                  label={UsersManagementRoute.passingPeopleReport}
                />

                <ControledCheckbox
                  control={control}
                  name="peoplesTrafficReport"
                  label={UsersManagementRoute.peoplesTrafficReport}
                />

                <ControledCheckbox
                  control={control}
                  name="entryAndExitReport"
                  label={UsersManagementRoute.entryAndExitReport}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {UsersManagementRoute.usersManagement}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="addStaff"
                  label={UsersManagementRoute.addStaff}
                />

                <ControledCheckbox
                  control={control}
                  name="editStaff"
                  label={UsersManagementRoute.editStaff}
                />

                <ControledCheckbox
                  control={control}
                  name="deleteStaff"
                  label={UsersManagementRoute.deleteStaff}
                />
              </StyledBox>

              <StyledBox>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    fontWeight: theme.typography.h4.fontWeight,
                    width: '100%',
                  }}
                >
                  {generalStr.settings}
                </Typography>

                <ControledCheckbox
                  control={control}
                  name="generalSetting"
                  label={commonWords.generalSetting}
                />

                <ControledCheckbox
                  control={control}
                  name="databaseSetting"
                  label={UsersManagementRoute.databaseSetting}
                />
              </StyledBox>
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
  );
}
