import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Control from './pages/Control';
import DashboardApp from './pages/DashboardApp';
import Automation from './pages/Automation';
import History from './pages/History';
import NotFound from './pages/Page404';
import Reports from './pages/Reports';
import Register from './pages/Register';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'control', element: <Control /> },
        { path: 'history', element: <History /> },
        { path: 'automation', element: <Automation /> },
        { path: 'reports', element: <Reports /> },
        { path: '/', element: <Navigate to="/dashboard/app" /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
