import { Grid, Typography } from '@mui/material';
import {
  Meridiem,
  MeridiemContainer,
  TimeContainer,
  TimeDatePickerTimer,
} from './style';
import { TTimePickerProps } from './type';
import theme from '@/theme';
import { generalStr } from '@/strings';
const TimePicker = ({ time, changeHandler, blurHandler }: TTimePickerProps) => {
  const meridiem = ['PM', 'AM'];

  return (
    <Grid
      container
      flexWrap="nowrap"
      color={theme.palette.common.white}
      padding="0.5rem 0.75rem"
      gap="0.5rem"
    >
      <Grid item width="60%">
        <Typography variant="subtitle1">{generalStr.time}</Typography>
      </Grid>
      <TimeContainer item>
        <Grid item width="18px">
          <TimeDatePickerTimer
            name="minutes"
            defaultValue="00"
            value={time.minutes}
            onChange={changeHandler}
            id="minutes"
            autoFocus={document.activeElement?.id === 'minutes'}
            onBlur={blurHandler}
          />
        </Grid>
        <Typography variant="subtitle2">:</Typography>
        <Grid item width="18px">
          <TimeDatePickerTimer
            name="hours"
            defaultValue="12"
            value={time.hours}
            onChange={changeHandler}
            id="hours"
            autoFocus={document.activeElement?.id === 'hours'}
            onBlur={blurHandler}
          />
        </Grid>
      </TimeContainer>
      <MeridiemContainer item>
        {meridiem.map((item, key) => (
          <Grid item height="28px" key={key}>
            <Meridiem
              onClick={changeHandler}
              sx={{
                backgroundColor:
                  time.meridiem === item ? theme.palette.primary.main : '',
              }}
            >
              {item}
            </Meridiem>
          </Grid>
        ))}
      </MeridiemContainer>
    </Grid>
  );
};
export default TimePicker;
