'use client';

import { CustomTextArea } from '@/components/atoms/Textarea/CustomTextarea/CustomTextarea';
import { Typography } from '@mui/material';
import { kMaxLength } from 'buffer';
import { useForm } from 'react-hook-form';

export default function Home() {
  const {control} = useForm({
    mode: 'onChange',
  });

  return (
    <>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="button">button</Typography>
      <div style={{display:'flex', alignItems : 'center', justifyContent:'center'}}>
        <CustomTextArea control={control} name ='label' label='LABEL' placeholder='guide place holder' error 
        rules={{
            required: 'required',
            maxLength: {
              value: 10,
              message: 'پیام مرتبط با خطا',
            }}}
            />
      </div>
    </>
  )}
