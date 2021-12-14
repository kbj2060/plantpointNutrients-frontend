import { combineReducers } from 'redux';
import Authentication from './Authentication';
import DashboardEnvironment from './DashboardEnvironment';

const allReducers = combineReducers({
  authentication: Authentication,
  dashboardEnvironment: DashboardEnvironment
});

// export type RootState = ReturnType<typeof allReducers>

export default allReducers;
