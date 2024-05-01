'use client';
import { FieldValues, useForm } from 'react-hook-form';
import { CustomInput } from '@/components/atoms/input/controlledCustomInput';
import { UnControlledCustomInput } from '@/components/atoms/input/uncontrolledCustomInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import { InputAdornment } from '@mui/material';
import { useState } from 'react';

export default function Dashboard() {
  const [shrinked, setShrinked] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  const { control, setError, handleSubmit } = useForm<FieldValues>({
    mode: 'onChange',
  });

  const submitHandler = (formData: FieldValues) => console.log(formData);
  return (
    <>
      <p>test components page</p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          padding: '10px 5px',
          display: 'flex',
          justifyContent: 'space-between',
          width: 'auto',
        }}
      >
        <CustomInput
          name="custom1"
          control={control}
          label="لیبل"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="end" sx={{ margin: '10px' }}>
                <Icon icon="mdi:user" />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: shrinked,
            style: { marginRight: 20 },
          }}
          value={currentValue}
          onFocus={() => setShrinked(true)}
          onChange={() => setShrinked(true)}
          onBlur={(e) => setShrinked(!!e.target.value)}
        />
        <CustomInput
          name="custom2"
          control={control}
          label="لیبل"
          type="text"
        />
        <CustomInput
          name="custom"
          control={control}
          label="لیبل"
          type="text"
          disabled
        />
        <CustomInput
          name="custom3"
          control={control}
          label="لیبل"
          type="text"
          setError={setError}
          validateType="num"
        />
        <UnControlledCustomInput
          onChange={(data: any) => console.log(data.target.value)}
        />
      </form>
    </>
  );
}
