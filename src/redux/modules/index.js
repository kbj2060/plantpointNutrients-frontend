import { combineReducers } from 'redux';
import Authentication from './Authentication';
import DashboardEnvironment from './DashboardEnvironment';
import Machines from './Machines';

const allReducers = combineReducers({
  authentication: Authentication,
  dashboardEnvironment: DashboardEnvironment,
  machines: Machines
  // dashboardTemperatureHistory: DashboardTemperatureHistory,
  // dashboardHumidityHistory: DashboardHumidityHistory
});

// export type RootState = ReturnType<typeof allReducers>

export default allReducers;
