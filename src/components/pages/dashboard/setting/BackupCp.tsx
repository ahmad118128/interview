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
import ControlledTimeDatePickerInput from '@/components/organisms/TimeDatePicker/ControlledTimeDatePicker';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { IError, ISuccess } from '../image-recognition/types';
import { lastBackupStatusHeader, lastBackupStatusMock } from './constants';
import { COLLAPSE_ID } from '../image-recognition/constants';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';

export function BackupCP() {
  const [selected, setSelected] = useState('emergencyBackup');
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const router = useRouter();
  const { control, handleSubmit } = useForm();
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
        <Typography variant="h2">{SettingRoute.backup}</Typography>

        <IconButton iconName="tabler:arrow-narrow-left" onClick={goBackUrl} />
      </StyledAddFormHeader>

      <StyledAddFormMain>
        <form onSubmit={handleSubmit(submitHadler)}>
          <label>
            <Typography variant="h3" sx={{ marginBottom: '1.25rem' }}>
              {SettingRoute.backupType}
            </Typography>
          </label>

          <StyledFilterChild container spacing={{ xs: 0, md: 8 }}>
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
                  value="emergencyBackup"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.emergencyBackup}
                  sx={{ margin: '0' }}
                />

                <FormControlLabel
                  value="partialBackup"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.partialBackup}
                  sx={{ margin: '0' }}
                />

                <FormControlLabel
                  value="automaticBackup"
                  control={<Radio sx={{ paddingRight: '0' }} />}
                  label={SettingRoute.automaticBackup}
                  sx={{ margin: '0' }}
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="backupFileAddress"
                fullWidth
                label={SettingRoute.backupFileAddress}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomInput
                control={control}
                name="dayCount"
                fullWidth
                label={SettingRoute.dayCount}
                type="number"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <ControlledTimeDatePickerInput
                name="backupDate"
                control={control}
                label={SettingRoute.backupDate}
                value={0}
                onChange={() => console.log('first')}
                rules={{ required: 'Require' }}
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
                <CustomButton type="submit" variant="contained">
                  {SettingRoute.record}
                </CustomButton>
                <CustomButton type="reset" variant="outlined">
                  {SettingRoute.refuse}
                </CustomButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <CustomInput
                control={control}
                name="backupFileAddress"
                fullWidth
                label={SettingRoute.backupFileAddress}
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
                <CustomButton type="submit" variant="contained">
                  {SettingRoute.record}
                </CustomButton>
                <CustomButton type="reset" variant="outlined">
                  {SettingRoute.refuse}
                </CustomButton>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3">
                {SettingRoute.lastBackupStatus}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <MobileCollapseTable
                rows={lastBackupStatusMock}
                headers={lastBackupStatusHeader}
                error={!tableData?.data?.results}
                mobileIdFilter={[COLLAPSE_ID, 'actionType', 'executionStatus']}
                pagination={pagination}
                handleSort={(id) => {
                  setOrder(id);
                }}
              />
            </Grid>
          </StyledFilterChild>
        </form>
      </StyledAddFormMain>
    </StyledAddFormWrapper>
  );
}
