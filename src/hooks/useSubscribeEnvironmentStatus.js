import { shallowEqual, useSelector } from 'react-redux';
import Proptypes from 'prop-types';

useSubscribeEnvironmentStatus.propTypes = {
  label: Proptypes.string
};

export default function useSubscribeEnvironmentStatus(label) {
  return useSelector(
    (state) => (state.dashboardEnvironment[label] ? state.dashboardEnvironment[label] : 0),
    shallowEqual
  );
}
