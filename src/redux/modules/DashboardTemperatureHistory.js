import update from 'immutability-helper';
import { saveState } from '../../utils/localstorage';

const UPDATE_DASHBOARD_TEMPERATURE_HISTORY = 'UPDATE_DASHBOARD_TEMPERATURE_HISTORY';

export function updateDashboardTemperaturetHistory(label, history) {
  return { type: UPDATE_DASHBOARD_TEMPERATURE_HISTORY, label, history };
}

const initialState = {
  dates: [],
  values: []
};

function DashboardTemperatureHistory(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DASHBOARD_TEMPERATURE_HISTORY: {
      const values = action.history.map((h) => h.value);
      const dates = action.history.map((h) => h.createdAt);
      const updated = update(state, {
        values: { $set: values },
        dates: { $set: dates }
      });
      saveState('dashboardTemperatureHistory', updated);
      return updated;
    }
    default:
      return state;
  }
}

export default DashboardTemperatureHistory;
