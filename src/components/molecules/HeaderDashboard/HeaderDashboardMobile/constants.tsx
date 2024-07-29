import { registrationStr } from '@/strings';

export const MobileActions = [
  {
    id: 1,
    tooltipTitle: registrationStr.panelGuide,
    icon: 'mdi:question-mark-box',
    onClick: () => console.log('panelGuide'),
  },
  {
    id: 2,
    tooltipTitle: registrationStr.notifications,
    icon: 'mingcute:notification-fill',
    onClick: () => console.log('notification'),
  },
  {
    id: 'logout',
    tooltipTitle: registrationStr.logOut,
    icon: 'ion:exit',
  },
];
