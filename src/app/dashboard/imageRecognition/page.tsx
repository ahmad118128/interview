'use client';
import {
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

export default function ImageRecognition() {
  const [selected, setSelected] = useState('female');

  const {
    setValue,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
