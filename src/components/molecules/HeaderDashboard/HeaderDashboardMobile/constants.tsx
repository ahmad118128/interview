import { Icon } from '@iconify/react';
import { registrationStr } from '@/strings';
import { onClick } from '@/components/atoms/CustomSearchBar/customSearchBar.stories';

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
    id: 3,
    tooltipTitle: registrationStr.logOut,
    icon: 'ion:exit',
    onClick: () => console.log('exit'),
  },
];
