import React from 'react';
import { Icon } from '@iconify/react';
import dashboardLine from '@iconify/icons-ri/dashboard-line';
import historyOutlined from '@iconify/icons-ant-design/history-outlined';
import icon3dCurveAutoColon from '@iconify/icons-carbon/3d-curve-auto-colon';
import reportIcon from '@iconify/icons-carbon/report';
import switchIcon from '@iconify/icons-entypo/switch';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(dashboardLine)
  },
  {
    title: 'control',
    path: '/dashboard/control',
    icon: getIcon(switchIcon)
  },
  {
    title: 'automation',
    path: '/dashboard/automation',
    icon: getIcon(icon3dCurveAutoColon)
  },
  {
    title: 'history',
    path: '/dashboard/history',
    icon: getIcon(historyOutlined)
  },
  {
    title: 'reports',
    path: '/dashboard/reports',
    icon: getIcon(reportIcon)
  }
];

export default sidebarConfig;
