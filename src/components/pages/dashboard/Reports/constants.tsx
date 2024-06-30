import { ReportRoute } from '@/strings';
import { Typography } from '@mui/material';
import TransientPeople from './components/TransientPeopleTab';
import ArrivalDepartures from './components/ArrivalAndDepartures';

export const tabs = [
  {
    id: 0,
    label: <Typography>{ReportRoute.transientPeople}</Typography>,
    disableTabRipple: false,
    tabPanel: <TransientPeople />,
  },
  {
    id: 1,
    label: <Typography>{ReportRoute.trafficOfPeople}</Typography>,
    disableTabRipple: false,
    tabPanel: <div>Tab 2</div>,
  },
  {
    id: 2,
    label: <Typography>{ReportRoute.arrivalsAndDepartures}</Typography>,
    disableTabRipple: false,
    tabPanel: <ArrivalDepartures />,
  },
];
