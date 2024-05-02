import { StyledCheckbox } from './styled';
import { ICustomCheckboxProps } from './type';

export const CustomCheckbox = (props: ICustomCheckboxProps) => {
  const { disabled, checked, error, onChange } = props;

  return (
    <StyledCheckbox
      disabled={disabled}
      checked={checked}
      error={error}
      onChange={onChange}
    />
  );
};
