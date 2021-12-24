import React from 'react';
import axios from 'axios';
import Router from './routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import { store } from './redux/store/index';
import CheckLogin from './components/CheckLogin';

export default function App() {
  axios.defaults.headers.common.Authorization = `Bearer ${
    store.getState().authentication.accessToken || ''
  }`;

  return (
    <ThemeConfig>
      <CheckLogin />
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}
