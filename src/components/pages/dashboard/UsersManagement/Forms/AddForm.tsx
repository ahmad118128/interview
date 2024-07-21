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
} from '@/components/template/FilterContainer/styled';
import { StyledFilterChild } from '../../image-recognition/FilterChild/styled';
import { IError, ISuccess } from '../../image-recognition/types';
import { CustomPasswordInput } from '@/components/atoms/CustomInput/RHFPasswordInput';
import theme from '@/theme';
import {
  StyledBox,
  StyledCheckboxWrapper,
  StyledGridCheckBox,
  StyledTitleGrid,
} from './styled';
import { addDataArray, inputFilterArray } from '../constants';
import { ControledCheckbox } from '@/components/atoms/Checkbox';
interface AddDataItem {
  title: string;
  check1Name: string;
  check1Label: string;
  check2Name: string;
  check2Label: string;
  check3Name?: string;
  check3Label?: string;
}

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
            {inputFilterArray.map(
              ({ name, label, isPassword, type }, index) => (
                <Grid item xs={12} md={4} key={index}>
                  {isPassword ? (
                    <CustomPasswordInput
                      control={control}
                      name={name}
                      fullWidth
                      label={label}
                    />
                  ) : (
                    <CustomInput
                      control={control}
                      name={name}
                      fullWidth
                      label={label}
                      type={type}
                    />
                  )}
                </Grid>
              )
            )}

            <Grid item xs={12}>
              <Typography variant="h3">
                {UsersManagementRoute.accessingPanelState}
              </Typography>
            </Grid>
            {/* /////////table////////// */}
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}
            >
              {addDataArray.map((item: AddDataItem, index: number) => (
                <StyledBox key={index}>
                  <StyledTitleGrid item xs={7} sm={5} md={3.6} lg={4}>
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
                  </StyledTitleGrid>
                  <StyledGridCheckBox item xs={12}>
                    <StyledCheckboxWrapper
                      item
                      xs={3.4}
                      sm={3.3}
                      md={3.4}
                      lg={3.4}
                    >
                      <ControledCheckbox
                        control={control}
                        name={item.check1Name}
                        label={item.check1Label}
                      />
                    </StyledCheckboxWrapper>
                    <StyledCheckboxWrapper item xs={4} md={4} lg={4}>
                      <ControledCheckbox
                        control={control}
                        name={item.check2Name}
                        label={item.check2Label}
                      />
                    </StyledCheckboxWrapper>
                    {item.check3Label && item.check3Name && (
                      <StyledCheckboxWrapper item xs={4} md={4} lg={4}>
                        <ControledCheckbox
                          control={control}
                          name={item.check3Name}
                          label={item.check3Label}
                        />
                      </StyledCheckboxWrapper>
                    )}
                  </StyledGridCheckBox>
                </StyledBox>
              ))}
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
