import { InputLabel, Box, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextAreaProps } from './type';
import { StyledBox } from '@/components/BaseComponents/BasedTextarea/styled';

export const BasedTextarea = (props: TextAreaProps) => {
  const {
    ltr,
    rules,
    label,
    placeholder,
    defaultValue,
    control,
    name = '',
    className,
    ...rest
  } = props;

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <StyledBox className={className} error={!!error}>
            <InputLabel>
              {label} {rules?.required ? '*' : ''}
            </InputLabel>
            <Box display="flex">
              <TextareaAutosize
                {...field}
                placeholder={placeholder}
                dir="auto"
                {...rest}
              />
            </Box>
            {error?.message && (
              <Typography className="errorStyle">{error?.message}</Typography>
            )}
          </StyledBox>
        );
      }}
      defaultValue={defaultValue}
    />
  );
};
