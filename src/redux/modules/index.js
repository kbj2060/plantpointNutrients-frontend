import { combineReducers } from 'redux';
import Authentication from './Authentication';
import DashboardEnvironment from './DashboardEnvironment';
import DashboardHumidityHistory from './DashboardHumidityHistory';
import DashboardTemperatureHistory from './DashboardTemperatureHistory';

const allReducers = combineReducers({
  authentication: Authentication,
  dashboardEnvironment: DashboardEnvironment
  // dashboardTemperatureHistory: DashboardTemperatureHistory,
  // dashboardHumidityHistory: DashboardHumidityHistory
});

// export type RootState = ReturnType<typeof allReducers>

export default allReducers;
