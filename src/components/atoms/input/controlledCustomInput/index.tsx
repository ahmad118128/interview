import { StyledErrorMessage, StyledTextField } from './styled';
import { Controller, FieldValues } from 'react-hook-form';
import { TCustomInput } from './type';
import { Grid } from '@mui/material';

export function CustomInput<TField extends FieldValues>(
  props: TCustomInput<TField>
) {
  const {
    name,
    control,
    rules,
    label,
    type,
    setError,
    inputProps,
    disabled,
    validateType,
    fullWidth,
    InputProps,
    onFocus,
    onBlur,
    defaultValue,
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Grid container>
          <Grid item xs={12}>
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
              validateType={validateType}
              error={!!error?.message}
              fullWidth={fullWidth}
              InputProps={InputProps}
              InputLabelProps={{
                shrink: !!value || !!defaultValue,
                style: { marginRight: 20 },
              }}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </Grid>
          <Grid item xs={12}>
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
