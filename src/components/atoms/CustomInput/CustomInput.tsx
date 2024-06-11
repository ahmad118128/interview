import { BaseInputProps } from '@/components/BaseComponents/baseInput';
import { StyledTextField } from './styled';

export function UnControlledCustomInput(props: BaseInputProps) {
  const {
    name,
    label,
    type,
    inputProps,
    disabled,
    value,
    onChange,
    validateType,
    error,
    fullWidth,
    InputProps,
  } = props;
  return (
    <StyledTextField
      name={name}
      variant="filled"
      label={label}
      type={type}
      inputProps={inputProps}
      disabled={disabled}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      InputProps={InputProps}
      validateType={validateType}
      helperText={error?.message}
    />
  );
}
