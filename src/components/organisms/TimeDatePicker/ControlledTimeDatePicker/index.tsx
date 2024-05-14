import { Controller, FieldValues } from 'react-hook-form';
import { TControlledProps } from './type';
import { TimeDatePicker } from '..';

function ControlledTimeDatePickerInput<TField extends FieldValues>(
  props: TControlledProps<TField>
) {
  const { name, control, rules, ...rest } = props;
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TimeDatePicker
          {...rest}
          value={field.value}
          error={fieldState.error?.message}
          onChange={field.onChange}
          name={name}
        />
      )}
    />
  );
}

export default ControlledTimeDatePickerInput;
