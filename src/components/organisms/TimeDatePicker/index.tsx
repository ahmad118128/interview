import { LocalizationProvider } from '@mui/x-date-pickers';
import { StyledDateTimePicker } from './style';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { TProps } from './type';
import { weekDays } from './constant';
import TimePicker from './components/timePicker';
import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export const TimeDatePicker = (props: TProps) => {
  const {
    label,
    value,
    onChange,
    defaultValue,
    readOnly,
    disabled,
    error,
    name,
    maxDateTime,
    minDateTime,
    disableFuture,
    disablePast,
  } = props;
  const [time, setTime] = useState({
    minutes: '00',
    hours: '12',
    meridiem: 'am',
  });

  const [timer, setTimer] = useState<number | null>();
  const [values, setValues] = useState<number>();

  const changeHandler = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | MouseEvent<HTMLSpanElement>
  ) => {
    e.stopPropagation();
    if ((e.target as HTMLInputElement).name === 'hours') {
      setTime({
        ...time,
        hours:
          +(e.target as HTMLInputElement).value < 12
            ? (e.target as HTMLInputElement).value
            : '12',
      });
    } else if ((e.target as HTMLInputElement).name === 'minutes') {
      setTime({
        ...time,
        minutes:
          +(e.target as HTMLInputElement).value < 60
            ? (e.target as HTMLInputElement).value
            : '59',
      });
    } else {
      setTime({
        ...time,
        meridiem: (e.target as HTMLElement).innerText,
      });
    }
  };

  const blurHandler = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'hours') {
      setTime({
        ...time,
        hours:
          +e.target.value < 12
            ? +e.target.value < 10
              ? `0${e.target.value}`
              : e.target.value
            : '12',
      });
    } else {
      setTime({
        ...time,
        minutes: +e.target.value < 10 ? `0${e.target.value}` : e.target.value,
      });
    }
  };

  const getValue = (value: number | string) => {
    const formattedHour =
      time.meridiem === 'am'
        ? time.hours === '12'
          ? 0
          : +time.hours
        : time.hours === '12'
          ? 12
          : +time.hours + 12;

    return value
      ? +value + formattedHour * 60 * 60 * 1000 + +time.minutes * 60 * 1000
      : '';
  };

  useEffect(() => {
    setTimer(
      (time.meridiem === 'am'
        ? time.hours === '12'
          ? 0
          : +time.hours
        : time.hours === '12'
          ? 12
          : +time.hours + 12) *
        60 *
        60 *
        1000 +
        +time.minutes * 60 * 1000
    );
  }, [time]);

  useEffect(() => {
    onChange(Number(values) + timer!);
  }, [timer, values]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
      <StyledDateTimePicker
        label={label}
        value={getValue(value)}
        defaultValue={defaultValue}
        onChange={(value: unknown) => {
          console.log(Number(value));
          setValues(Number(value));
          onChange(value ? +value + timer! : null);
        }}
        dayOfWeekFormatter={(day: string) =>
          weekDays.find((weekDay) => weekDay.id === day)?.value ?? ''
        }
        name={name}
        hasError={!!error}
        readOnly={readOnly}
        disabled={disabled}
        maxDateTime={maxDateTime}
        minDateTime={minDateTime}
        disableFuture={disableFuture}
        views={['day', 'year', 'hours', 'minutes']}
        reduceAnimations
        disablePast={disablePast}
        yearsPerRow={3}
        slotProps={{ field: { clearable: true } }}
        slots={{
          clearIcon: () => (value ? <ClearIcon /> : null),
          actionBar: () => (
            <TimePicker
              time={time}
              changeHandler={changeHandler}
              blurHandler={blurHandler}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
};
