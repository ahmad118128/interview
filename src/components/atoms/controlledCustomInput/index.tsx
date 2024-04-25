import { StyledErrorMessage, StyledTextField } from './styled';
import { Controller, FieldValues } from 'react-hook-form';
import { TCustomInput } from './type';
import { Grid } from '@mui/material';

export function CustomInput<TField extends FieldValues>(
  props: TCustomInput<TField>
) {
  const { name, control, rules, label, type, setError, inputProps, disabled } =
    props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid container>
          <Grid item xs={6}>
            <StyledTextField
              name={name}
              variant="filled"
              label={label}
              type={type}
              setError={setError}
              inputProps={inputProps}
              disabled={disabled}
              value={value}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={6}>
            {error?.message && (
              <StyledErrorMessage variant="caption">
                {error?.message}
              </StyledErrorMessage>
            )}
          </Grid>
        </Grid>
      )}
    />
  );
}
