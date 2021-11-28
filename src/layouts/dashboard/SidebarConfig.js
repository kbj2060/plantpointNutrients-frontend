import { Icon } from '@iconify/react';
import dashboardLine from '@iconify/icons-ri/dashboard-line';
import historyOutlined from '@iconify/icons-ant-design/history-outlined';
import icon3dCurveAutoColon from '@iconify/icons-carbon/3d-curve-auto-colon';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(dashboardLine)
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
  }
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon(fileTextFill)
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon(alertTriangleFill)
  // }
];

export default sidebarConfig;
