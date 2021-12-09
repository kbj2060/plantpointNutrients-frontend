import update from 'immutability-helper';
import { saveState } from '../../utils/localstorage';

const UPDATE_DASHBOARD_ENVIRONMENT = 'UPDATE_DASHBOARD_ENVIRONMENT';

export function updateDashboardEnvironment(label, value) {
  return { type: UPDATE_DASHBOARD_ENVIRONMENT, label, value };
}

const initialState = {
  humidity: 0,
  temperature: 0
};

function DashboardEnvironment(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DASHBOARD_ENVIRONMENT: {
      const updated = update(state, { [action.label]: { $set: action.value } });
      saveState('dashboardEnvironment', updated);
      return updated;
    }
    default:
      return state;
  }
}

export default DashboardEnvironment;
