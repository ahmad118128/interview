import { generalStr, siderBarList } from '@/strings';

export const drawerSidebarList = [
  {
    title: siderBarList.dashboard,
    icon: 'material-symbols:home-rounded',
  },
  {
    title: siderBarList.informationBank,
    icon: 'material-symbols:database',
    url: 'dataBank',
  },
  {
    title: siderBarList.supervisitoryList,
    icon: 'material-symbols:patient-list-rounded',
    url: 'supervisitoryList',
  },
  {
    title: siderBarList.imageRecognition,
    icon: 'mdi:user-search',
    url: 'imageRecognition',
  },
  {
    title: siderBarList.report,
    icon: 'solar:clipboard-list-bold',
    url: 'report',
  },
  {
    title: siderBarList.trafficAnalysis,
    icon: 'mdi:report-box',
    url: 'trafficAnalysis',
  },
  {
    title: siderBarList.userManagement,
    icon: 'mdi:users-group',
    url: 'userManagment',
  },
];

export const drawerSidebarSetting = {
  title: siderBarList.setting,
  icon: 'ant-design:setting-filled',
  url: 'setting',
};
