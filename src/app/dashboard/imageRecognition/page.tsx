'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { StyledContainerImageRecognition } from './styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import theme from '@/theme';
import { CustomButton } from '@/components/atoms/CustomButton';
import { FilterContainer } from '@/components/CustomTable/widgets';
import { FilterChild } from '@/components/pages/UI/UsersTab/FilterChild';
import { EFilterTableNameIcon } from '@/components/CustomTable/widgets/FilterContainer/type';
import { FilterIcon } from '@/components/CustomTable/shared';

export default function ImageRecognition() {
  const [selected, setSelected] = useState('female');
  const [collapse, setCollapse] = useState(false);

  const {
    setValue,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const handleIconClick = (name: EFilterTableNameIcon) => {
    switch (name) {
      case EFilterTableNameIcon.FILTER:
        setCollapse((prev) => !prev);
        break;

      case EFilterTableNameIcon.REFRESH:
        // serviceCall();
        break;

      default:
        break;
    }
  };

  return (
    <StyledContainerImageRecognition>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <Accordion
              expanded={collapse}
              sx={{ display: 'flex', flexDirection: 'column' }}
            >
              <AccordionSummary>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      className="uploadIcon"
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
              <AccordionDetails>
                <FilterChild />
              </AccordionDetails>
            </Accordion>

            <FormControlLabel
              value="male"
              control={<Radio />}
              label="male"
              sx={{
                marginRight: 0,
                marginTop: selected === 'female' ? '2rem' : 0,
                marginBottom: selected === 'male' ? '2rem' : 0,
              }}
            />
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
                    <Icon
                      icon="material-symbols:upload-rounded"
                      height="20"
                      width="20"
                      className="uploadIcon"
                    />
                  ),
                }}
              />
            )}
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
              onClick={() => setValue('InputFile', '')}
              disabled={!watch('InputFile')}
            >
              انصراف
            </CustomButton>
          </Box>
        </FormControl>
      </form>
    </StyledContainerImageRecognition>
  );
}
