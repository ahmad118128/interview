import { Checkbox, FormControlLabel } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface Props {
  name: string;
  label: string | number;
  control?: Control<FieldValues> | undefined;
}

const Input = ({ name, label, control }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel control={<Checkbox {...field} />} label={label} />
      )}
    />
  );
};

export default Input;
