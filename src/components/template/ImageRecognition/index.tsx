'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TableCell,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CustomButton } from '@/components/atoms/CustomButton';
// import { FilterChild } from '@/components/pages/dashboard/image-recognition/FilterChild';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FilterIcon } from '@/components/CustomTable/shared';
import { MobileCollapseTable } from '@/components/CustomTable/widgets';
import { CellType } from '@/components/CustomTable/types';
import { commonWords } from '@/strings';
import theme from '@/theme';
import { CustomPaginationProps } from '@/components/CustomTable/shared/TablePagination/types';
import {
  IError,
  ISuccess,
} from '@/components/pages/dashboard/image-recognition/types';
import {
  COLLAPSE_ID,
  headers,
  mockData,
} from '@/components/pages/dashboard/image-recognition/constants';
import { CustomInput } from '@/components/atoms/CustomInput/RHFCustomInput';
import { StyledContainerImageRecognition } from './styled';

const CustomAccordion = styled(Accordion)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  margin: '0 !important',
  '&.MuiAccordion-root:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    padding: 0,
    minHeight: 'unset',
    '& .MuiAccordionSummary-content': {
      margin: 0,
      padding: 0,
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: 0,
  },
});

export default function ImageRecognitionTemplate() {
  const [selected, setSelected] = useState('female');
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tableData, setTableData] = useState<null | ISuccess | IError>(null);
  const [order, setOrder] = useState<string | unknown>('');

  const methods = useForm({
    defaultValues: {
      InputFile: '',
      title1: '',
      title3: '',
      title4: '',
      testing: 1,
      genre: [],
    },
  });
  const { reset, control, handleSubmit, watch } = methods;
  const onSubmit = (data: any) => console.log(data);

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        !collapse2 && setCollapse((prev) => !prev);
        if (collapse2) {
          setCollapse2(false);
          setCollapse((prev) => !prev);
        }
        break;
      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;
      default:
        break;
    }
  };

  const handleIconClick2 = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        !collapse && setCollapse2((prev) => !prev);
        if (collapse) {
          setCollapse(false);
          setCollapse2((prev) => !prev);
        }
        break;
      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;
      default:
        break;
    }
  };
  const tableHeads: CellType[] = [
    ...headers,
    {
      id: 'actions',
      label: commonWords.action,
      type: 'function',
      function: (row) => (
        <TableCell>
          <Icon
            icon="ic:baseline-delete"
            width="24"
            height="24"
            color={theme.palette.primary.main}
            style={{ marginLeft: '0.5rem' }}
          />
          <Icon
            icon="ep:picture-filled"
            width="24"
            height="24"
            color={theme.palette.primary.main}
          />
        </TableCell>
      ),
    },
  ];
  const pagination: CustomPaginationProps = {
    all_page: tableData?.data?.all_page as number,
    current: currentPage,
    setPage: (newPage: number) => setCurrentPage(newPage),
  };
  return (
    <>
      <StyledContainerImageRecognition onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ width: '100%', paddingY: 0 }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={selected}
            onChange={(ev) => {
              console.log(ev.target.value);
              setSelected(ev.target.value);
            }}
            sx={{ width: '100%', paddingY: 0 }}
          >
            <CustomAccordion expanded={collapse}>
              <AccordionSummary>
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
                      value="female"
                      control={<Radio sx={{ paddingRight: '0' }} />}
                      label="Female"
                      sx={{
                        marginRight: 0,
                        marginBottom: selected === 'female' ? '2rem' : 0,
                      }}
                    />
                    <FilterIcon
                      onHandleIconClick={handleIconClick}
                      active={collapse}
                    />
                  </Box>
                  {selected === 'female' && (
                    <CustomInput
                      control={control}
                      name="InputFile"
                      fullWidth
                      sx={{ marginBottom: '2rem' }}
                      label="بارگذاری تصویر"
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
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ marginTop: '2rem' }}>
                {/* <FilterChild control={control} /> */}
              </AccordionDetails>
            </CustomAccordion>

            <CustomAccordion expanded={collapse2}>
              <AccordionSummary>
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
                      alignItems: 'baseline',
                      margin: '0px !important',
                    }}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio sx={{ paddingRight: '0' }} />}
                      label="Male"
                      sx={{
                        marginRight: 0,
                        marginTop: selected === 'female' ? '2rem' : 0,
                        marginBottom: selected === 'male' ? '2rem' : 0,
                      }}
                    />
                    <FilterIcon
                      onHandleIconClick={handleIconClick2}
                      active={collapse2}
                    />
                  </Box>
                  {selected === 'male' && (
                    <CustomInput
                      control={control}
                      name="InputFile"
                      fullWidth
                      type="file"
                      label="بارگذاری تصویر"
                      sx={{ marginBottom: '2rem' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ marginRight: 0 }}
                          >
                            <Icon
                              icon="material-symbols:upload-rounded"
                              height="20"
                              width="20"
                              className="uploadIcon"
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ marginTop: '2rem' }}>
                {/* <FilterChild control={control} /> */}
              </AccordionDetails>
            </CustomAccordion>
          </RadioGroup>
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
              شناسایی مجدد
            </CustomButton>
            <CustomButton
              variant="outlined"
              onClick={() => reset()}
              disabled={!watch('InputFile')}
            >
              پاک‌سازی
            </CustomButton>
          </Box>
        </FormControl>
      </StyledContainerImageRecognition>
      <MobileCollapseTable
        rows={mockData}
        headers={tableHeads}
        error={!tableData?.data?.results}
        mobileIdFilter={[COLLAPSE_ID, 'matchCount', 'actions']}
        pagination={pagination}
        handleSort={(id) => {
          setOrder(id);
        }}
      />
    </>
  );
}
