'use clinet';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TextField } from '../TextField';
import { FieldValues, useForm } from 'react-hook-form';

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
