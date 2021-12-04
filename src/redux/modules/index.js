import { combineReducers } from 'redux';
import Authentication from './Authentication';
import DashboardEnvironment from './DashboardEnvironment';
import DashboardEnvironmentHistory from './DashboardEnvironmentHistory';

const allReducers = combineReducers({
  authentication: Authentication,
  dashboardEnvironment: DashboardEnvironment,
  dashboardEnvironmentHistory: DashboardEnvironmentHistory
});

// export type RootState = ReturnType<typeof allReducers>

export default allReducers;
