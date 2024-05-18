import { StyledTextField } from './styled';
import { Controller, FieldValues } from 'react-hook-form';
import { TCustomInput } from './type';

export function CustomInput<TField extends FieldValues>(
  props: TCustomInput<TField>
) {
  const {
    name,
    control,
    rules,
    label,
    type,
    setError,
    inputProps,
    disabled,
    validateType,
    fullWidth,
    InputProps,
    onFocus,
    onBlur,
    InputLabelProps,
    variant,
    hiddenLabel,
    placeholder,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <StyledTextField
          variant={variant ? variant : 'filled'}
          label={label}
          type={type}
          setError={setError}
          inputProps={inputProps}
          disabled={disabled}
          value={value}
          onChange={onChange}
          validateType={validateType}
          error={!!error?.message}
          fullWidth={fullWidth}
          InputProps={InputProps}
          InputLabelProps={InputLabelProps}
          onFocus={onFocus}
          onBlur={onBlur}
          hiddenLabel={!!hiddenLabel}
          placeholder={placeholder}
          helperText={error?.message}
        />
      )}
    />
  );
}
