import { BaseInputProps } from '@/app/baseComponents/atoms/baseInput';
import { StyledTextFieldRtl } from './styled';

export const CustomInput = (props: BaseInputProps) => {
  const {
    control,
    rules,
    name,
    element,
    type,
    ltrValue,
    ltrLabel,
    endAdornment,
    startAdornment,
    defaultValue = '',
    label,
    validateType,
    className,
    variant,
    setError,
    id,
    inputProps,
    inputBaseProps,
    changeMiddleWare,
    size,
    ...rest
  } = props;
  return (
    <StyledTextFieldRtl
      name={name}
      control={control}
      variant="filled"
      label={label}
      type={type}
      rules={rules}
      element={element}
      ltrLabel={ltrLabel}
      endAdornment={endAdornment}
      startAdornment={startAdornment}
      defaultValue={defaultValue}
      validateType={validateType}
      className={className}
      setError={setError}
      id={id}
      inputProps={inputProps}
      inputBaseProps={inputBaseProps}
      changeMiddleWare={changeMiddleWare}
      {...rest}
    ></StyledTextFieldRtl>
  );
};
