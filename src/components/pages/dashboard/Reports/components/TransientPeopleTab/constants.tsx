import { CellType } from '@/components/CustomTable/types';
import { ReportRoute } from '@/strings';

export const COLLAPSE_ID = 'collapse';

export const TransientMockData = [
  {
    id: 1,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 2,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 3,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 4,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 5,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 6,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 7,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 8,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 9,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
  {
    id: 10,
    gateName: 'Gate probox 1.1-2',
    directionOfGate: 'ورودی - خروجی',
    registrationTime: '5:45 - 1402/05/20',
    age: '25',
    gender: 'مرد با احتمال بالا',
    matchCount: '1',
  },
];

export const TransientPeopleHeader: CellType[] = [
  {
    id: COLLAPSE_ID,
    label: '',
  },
  {
    id: 'gateName',
    label: ReportRoute.gateName,
    sortable: true,
  },
  {
    id: 'directionOfGate',
    label: ReportRoute.directionOfGate,
    sortable: true,
  },
  {
    id: 'registrationTime',
    label: ReportRoute.registrationTime,
    sortable: true,
  },
  {
    id: 'age',
    label: ReportRoute.age,
    sortable: true,
  },
  {
    id: 'gender',
    label: ReportRoute.gender,
    sortable: true,
  },
  {
    id: 'matchCount',
    label: ReportRoute.matchCount,
    sortable: true,
  },
];
