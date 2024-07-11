import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';

import { FieldAdornment } from './components/Adornment';
import { StyledDateTimePicker } from './style';
import { weekDays } from './constant';
import { TProps } from './type';
import { Toolbar } from './components/Toolbar';

export const TimeDatePicker = (props: TProps) => {
  const { value, onChange, error, ...rest } = props;

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFnsJalali}
      dateFormats={{ monthAndYear: 'yyyyMMMM' }}
    >
      <StyledDateTimePicker
        {...rest}
        value={value || null}
        hasError={!!error}
        ampmInClock={false}
        ampm={false}
        onChange={(value) => {
          onChange && onChange(value ? +value! : null);
        }}
        dayOfWeekFormatter={(day: string) =>
          weekDays.find((weekDay) => weekDay.id === day)?.value ?? ''
        }
        views={['day', 'year', 'hours', 'minutes']}
        reduceAnimations
        yearsPerRow={3}
        showDaysOutsideCurrentMonth
        slotProps={{
          field: {
            InputProps: {
              endAdornment: (
                <FieldAdornment onChange={onChange} value={value} />
              ),
            },
          },
          dialog: {
            className: 'time-date-picker',
          },
        }}
        slots={{
          toolbar: (props) => <Toolbar date={props.value} />,
        }}
        closeOnSelect
      />
    </LocalizationProvider>
  );
};
