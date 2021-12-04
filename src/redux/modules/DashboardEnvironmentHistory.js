const SAVE_DASHBOARD_ENVIRONMENT_HISTORY = 'SAVE_DASHBOARD_ENVIRONMENT_HISTORY';

export function saveDashboardEnvironmentHistory(history) {
  return { type: SAVE_DASHBOARD_ENVIRONMENT_HISTORY, history };
}

const initialState = {
  dates: [],
  humidity: [],
  temperature: []
};

function DashboardEnvironmentHistory(state = initialState, action) {
  switch (action.type) {
    case SAVE_DASHBOARD_ENVIRONMENT_HISTORY:
      return action.history;
    default:
      return state;
  }
}

export default DashboardEnvironmentHistory;
