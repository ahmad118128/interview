'use client';

import { useForm, FieldValues } from 'react-hook-form';

import { Box, Grid, Typography } from '@mui/material';
import { DataBankRoute, SupervisitoryListRoute } from '@/strings';
import { IconButton } from '@/components/atoms/CustomButton/IconButton';
import { useRouter } from 'next/navigation';
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
import { StyledFilterChild } from '../image-recognition/FilterChild/styled';
import {
  supervisitoryListMembersHeader,
  supervisitoryListMembersMock,
} from './constants';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { useState } from 'react';
import { IError, ISuccess } from '../image-recognition/types';

export function EditFormSupervisory() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      supervisoryListName: 'متن ورودی',
      similarityPercentage: '54.52٪',
      status: 'فعال',
      texteara1: 'متن پیش فرض',
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
        <Typography variant="h2">
          {SupervisitoryListRoute.addSupervisoryListFormTitle}
        </Typography>

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
              {SupervisitoryListRoute.listInfo}
            </Typography>
          </label>

          <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="supervisoryListName"
                fullWidth
                label={SupervisitoryListRoute.supervisoryListName}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="similarityPercentage"
                fullWidth
                label={SupervisitoryListRoute.similarityPercentage}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomRHFAutocomplete
                label={SupervisitoryListRoute.status}
                control={control}
                name="status"
                options={[]}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextArea
                label={DataBankRoute.information}
                control={control}
                name="texteara1"
                placeholder={DataBankRoute.infoDialog}
              />
            </Grid>

            <Grid item xs={12}>
              <MobileCollapseTable
                rows={supervisitoryListMembersMock}
                headers={supervisitoryListMembersHeader}
                error={!tableData?.data?.results}
                mobileIdFilter={[COLLAPSE_ID, 'fullName', 'nationalId']}
                pagination={pagination}
                handleSort={(id) => {
                  setOrder(id);
                }}
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
  );
}
