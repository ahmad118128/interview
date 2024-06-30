import { ReportRoute } from '@/strings';
import { Typography } from '@mui/material';
import TransientPeople from './components/TransientPeopleTab';
import ArrivalDepartures from './components/ArrivalAndDepartures';
import TrafficOfPeople from '../report';

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
    tabPanel: <TrafficOfPeople />,
  },
  {
    id: 2,
    label: <Typography>{ReportRoute.arrivalsAndDepartures}</Typography>,
    disableTabRipple: false,
    tabPanel: <ArrivalDepartures />,
  },
];
