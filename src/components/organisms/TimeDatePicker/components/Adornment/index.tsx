import { InputAdornment } from '@mui/material';
import { CalendarIcon, ClearIcon } from '@mui/x-date-pickers';

export const FieldAdornment = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number | null) => void;
}) => (
  <InputAdornment position="end">
    {!!value && (
      <ClearIcon
        onClick={(e) => {
          e.stopPropagation();
          onChange(null);
        }}
        className="clear"
      />
    )}
    <CalendarIcon />
  </InputAdornment>
);
