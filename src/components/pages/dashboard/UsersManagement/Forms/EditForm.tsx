'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Box, Grid, Typography } from '@mui/material';
import {
  DataBankRoute,
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
} from '@/components/template/FilterContainer/styled';
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
import { addDataArray } from '../constants';

export function EditFormUsers() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      userName: 'متن ورودی',
      roobinPassword: 'متن ورودی',
      repeatRoobinPassword: 'متن ورودی',
      name: 'متن ورودی',
      lastName: 'متن ورودی',
      nationalId: 2008898768,
    },
  });
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

        <IconButton
          iconName="tabler:arrow-narrow-left"
          onClick={goBackUrl}
          width={24}
          height={24}
        />
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
              {addDataArray.map((item: any, index: number) => {
                return (
                  <StyledBox key={index}>
                    <Typography
                      variant="h4"
                      noWrap
                      sx={{
                        fontWeight: theme.typography.h4.fontWeight,
                        width: '100%',
                      }}
                    >
                      {item.title}
                    </Typography>

                    <ControledCheckbox
                      control={control}
                      name={item.check1Name}
                      label={item.check1Label}
                      checked={item.check1}
                    />

                    <ControledCheckbox
                      control={control}
                      name={item.check2Name}
                      label={item.check2Label}
                      checked={item.check2}
                    />

                    {item.check3Label ? (
                      <ControledCheckbox
                        control={control}
                        name={item.check3Name}
                        label={item.check3Label}
                        checked={item.check3}
                      />
                    ) : null}
                  </StyledBox>
                );
              })}
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
