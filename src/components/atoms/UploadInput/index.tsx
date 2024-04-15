'use clinet';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TextField } from '../TextField';
import { FieldValues, useForm } from 'react-hook-form';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  const { control } = useForm<FieldValues>();
  return (
    <TextField
      name="file"
      type="file"
      control={control}
      label="آپلود فایل"
      className="customFileInput"
    />
  );
}
