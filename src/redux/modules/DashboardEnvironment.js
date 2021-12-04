const SAVE_DASHBOARD_ENVIRONMENT = 'SAVE_DASHBOARD_ENVIRONMENT';
const UPDATE_DASHBOARD_ENVIRONMENT = 'UPDATE_DASHBOARD_ENVIRONMENT';

export function saveDashboardEnvironment(environments) {
  return { type: SAVE_DASHBOARD_ENVIRONMENT, environments };
}
export function changeDashboardEnvironment(environments) {
  return { type: UPDATE_DASHBOARD_ENVIRONMENT, environments };
}

const initialState = {
  humidity: 0,
  temperature: 0
};

function DashboardEnvironment(state = initialState, action) {
  switch (action.type) {
    case SAVE_DASHBOARD_ENVIRONMENT:
      return action.environments;
    case UPDATE_DASHBOARD_ENVIRONMENT:
      return action.environments;
    default:
      return state;
  }
}

export default DashboardEnvironment;
