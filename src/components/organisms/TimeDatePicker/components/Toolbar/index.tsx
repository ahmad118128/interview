import { Grid, Typography, useTheme } from '@mui/material';
import { ToolBarContainer } from './styled';

export const Toolbar = ({ date }: { date: unknown }) => {
  const theme = useTheme();
  const jDate = date
    ? new Intl.DateTimeFormat('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format(date as number | Date)
    : new Intl.DateTimeFormat('fa-IR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }).format();

  return (
    <ToolBarContainer container>
      <Grid item container gap={1} xs={6} justifyContent="center">
        {jDate
          .split(' ')
          .slice(0, 3)
          .map((item, index) => (
            <Typography
              key={index}
              variant="h6"
              color={theme.palette.secondary.main}
            >
              {item}
            </Typography>
          ))}
      </Grid>
      <Grid item container xs={6} justifyContent="center">
        <Typography variant="h6" color={theme.palette.secondary.main}>
          {jDate.split(' ')[4]}
        </Typography>
      </Grid>
    </ToolBarContainer>
  );
};
