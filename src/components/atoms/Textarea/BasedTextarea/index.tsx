import { InputLabel, Box, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { TextAreaProps } from './type';
import { StyledBox } from './styled';

export const BasedTextarea = (props: TextAreaProps) => {
  const {
    control,
    ltr,
    disabled,
    readOnly,
    rules,
    label,
    placeholder,
    defaultValue,
    error,
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
        console.log(error);

        return (
          <StyledBox className={className} error={!!error}>
            <InputLabel>
              {label} {rules?.required ? '*' : ''}
            </InputLabel>
            <Box display="flex">
              <TextareaAutosize
                {...field}
                minRows={3}
                disabled={disabled}
                readOnly={readOnly}
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
