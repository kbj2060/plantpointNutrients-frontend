import update from 'immutability-helper';
import { saveState } from '../../utils/localstorage';

const UPDATE_MACHINES = 'UPDATE_MACHINES';

export function updateMachine(machines) {
  return { type: UPDATE_MACHINES, machines };
}

const initialState = {};

function Machines(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MACHINES: {
      const updated = {};
      action.machines.forEach((machine) => {
        updated[machine.id] = machine.name;
      });
      saveState('machines', updated);
      return updated;
    }
    default:
      return state;
  }
}

export default Machines;
