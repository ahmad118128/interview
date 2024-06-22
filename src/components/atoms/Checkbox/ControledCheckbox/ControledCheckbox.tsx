import { Controller } from 'react-hook-form';
import { StyledCheckbox, StyledWrapper } from './styled';
import { IControledCheckboxProps } from './type';

export const ControledCheckbox = (props: IControledCheckboxProps) => {
  const { name, control, disabled, checked, error, onChange, label } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledWrapper>
          <StyledCheckbox
            {...field}
            disabled={disabled}
            checked={checked}
            error={error}
            onChange={onChange}
          />
          <label>{label}</label>
        </StyledWrapper>
      )}
    />
  );
};
