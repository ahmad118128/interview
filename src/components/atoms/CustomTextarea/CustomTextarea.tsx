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
    minRows,
    defaultValue,
    name = '',
  } = props;

  return (
    <StyledTextArea
      control={control}
      ltr={ltr}
      disabled={disabled}
      readOnly={readOnly}
      minRows={minRows}
      rules={rules}
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
    />
  );
};
