import { Icon } from '@iconify/react';
import { registrationStr } from '@/strings';

export const MobileActions = [
  {
    id: 1,
    tooltipTitle: registrationStr.panelGuide,
    icon: <Icon width={24} icon={'mdi:question-mark-box'} />,
    clickHandler: () => console.log('panelGuide'),
  },
  {
    id: 2,
    tooltipTitle: registrationStr.notifications,
    icon: <Icon width={24} icon={'mingcute:notification-fill'} />,
    clickHandler: () => console.log('notification'),
  },
  {
    id: 3,
    tooltipTitle: registrationStr.logOut,
    icon: <Icon width={24} icon={'ion:exit'} />,
    clickHandler: () => console.log('exit'),
  },
];
