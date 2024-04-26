import { Controller } from 'react-hook-form';
import { StyledCheckbox } from './styled';
import { IControledCheckboxProps } from './type';

export const ControledCheckbox = (props: IControledCheckboxProps) => {
  const { name, control, disabled, checked, error, onChange } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledCheckbox
          disabled={disabled}
          checked={checked}
          error={error}
          onChange={onChange}
        />
      )}
    />
  );
};
