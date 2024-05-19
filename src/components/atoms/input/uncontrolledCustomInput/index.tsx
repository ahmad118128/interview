import { StyledTextField } from '../controlledCustomInput/styled';
import { BaseInputProps } from '@/components/baseComponents/baseInput';

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
      validateType={validateType}
      helperText={error?.message}
    />
  );
}
