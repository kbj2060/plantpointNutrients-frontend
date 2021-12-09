import update from 'immutability-helper';
import { saveState } from '../../utils/localstorage';

const UPDATE_DASHBOARD_HUMIDITY_HISTORY = 'UPDATE_DASHBOARD_HUMIDITY_HISTORY';

export function updateDashboardHumiditytHistory(label, history) {
  return { type: UPDATE_DASHBOARD_HUMIDITY_HISTORY, label, history };
}

const initialState = {
  dates: [],
  values: []
};

function DashboardHumidityHistory(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DASHBOARD_HUMIDITY_HISTORY: {
      const values = action.history.map((h) => h.value);
      const dates = action.history.map((h) => h.createdAt);
      const updated = update(state, {
        values: { $set: values },
        dates: { $set: dates }
      });
      saveState('dashboardHumidityHistory', updated);
      return updated;
    }
    default:
      return state;
  }
}

export default DashboardHumidityHistory;
