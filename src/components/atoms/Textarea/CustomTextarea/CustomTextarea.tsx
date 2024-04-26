import { InputLabel, Box } from '@mui/material';
import { Controller } from 'react-hook-form';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { StyledTextArea } from './styled';
import { TextAreaProps } from './type';

export const CustomTextArea = (props: TextAreaProps) => {
  const {
    control,
    ltr,
    disabled,
    readOnly,
    rules,
    label,
    placeholder,
    defaultValue,
    name = '',
    ...rest
  } = props;

  return (
    <StyledTextArea
      control={control}
      ltr={ltr}
      disabled={disabled}
      readOnly={readOnly}
      rules={rules}
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      {...rest}
    />
  );
};
