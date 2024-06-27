import { StyledCheckbox } from './styled';
import { ICustomCheckboxProps } from './type';

export const CustomCheckbox = (props: ICustomCheckboxProps) => {
  const { disabled, checked, error, onChange, label } = props;

  return (
    <>
      <label>{label}</label>
      <StyledCheckbox
        disabled={disabled}
        checked={checked}
        error={error}
        onChange={onChange}
      />
    </>
  );
};
