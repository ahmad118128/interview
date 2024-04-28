import { BaseInputProps } from '@/app/baseComponents/atoms/baseInput';
import { StyledTextField } from '../controlledCustomInput/styled';

export function UnControllesCustomInput(props: BaseInputProps) {
  const {
    name,
    label,
    type,
    inputProps,
    disabled,
    value,
    onChange,
    validateType,
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
    />
  );
}
