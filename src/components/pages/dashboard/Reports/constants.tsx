import { ReportRoute } from '@/strings';
import { Typography } from '@mui/material';
import TransientPeople from './components/TransientPeopleTab';
import ArrivalDepartures from './components/ArrivalAndDepartures';

export const tabs = [
  {
    id: 0,
    label: ReportRoute.transientPeople,
    disableTabRipple: false,
    tabPanel: <TransientPeople />,
  },
  {
    id: 1,
    label: ReportRoute.trafficOfPeople,
    disableTabRipple: false,
    tabPanel: <div>Tab 2</div>,
  },
  {
    id: 2,
    label: ReportRoute.arrivalsAndDepartures,
    disableTabRipple: false,
    tabPanel: <ArrivalDepartures />,
  },
];
