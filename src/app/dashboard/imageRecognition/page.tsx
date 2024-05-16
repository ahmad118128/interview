'use client';
import {
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

export default function ImageRecognition() {
  const { control } = useForm();
  const [selected, setSelected] = useState('female');

  return (
    <StyledContainerImageRecognition>
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
      </FormControl>
    </StyledContainerImageRecognition>
  );
}
