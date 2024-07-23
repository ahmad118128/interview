import { ReportRoute } from '@/strings';
import TransientPeople from './components/TransientPeopleTab';
import ArrivalDepartures from './components/ArrivalAndDepartures';
import TrafficOfPeople from './components/TrafficOfPeople';

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
    tabPanel: <TrafficOfPeople />,
  },
  {
    id: 2,
    label: ReportRoute.arrivalsAndDepartures,
    disableTabRipple: false,
    tabPanel: <ArrivalDepartures />,
  },
];
