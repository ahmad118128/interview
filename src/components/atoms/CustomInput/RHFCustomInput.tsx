import { Controller, FieldValues } from 'react-hook-form';
import { TCustomInput } from './type';
import { UnControlledCustomInput } from './CustomInput';

export function CustomInput<TField extends FieldValues>(
  props: TCustomInput<TField>
) {
  const { name, control, rules } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <UnControlledCustomInput {...props} {...field} {...fieldState} />
        );
      }}
    />
  );
}
