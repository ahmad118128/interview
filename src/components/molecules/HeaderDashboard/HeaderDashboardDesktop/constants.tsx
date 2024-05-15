import { Icon } from '@iconify/react';
import { registrationStr } from '@/strings';

export const DesktopActions = [
  {
    id: 1,
    tooltipTitle: registrationStr.panelGuide,
    icon: <Icon width={20} icon={'mdi:question-mark-box'} />,
    clickHandler: () => console.log('panelGuide'),
  },
  {
    id: 2,
    tooltipTitle: registrationStr.notifications,
    icon: <Icon width={20} height={18} icon={'mingcute:notification-fill'} />,
    clickHandler: () => console.log('notification'),
  },
];
