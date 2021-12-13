import axios from 'axios';
import { ADDRESS } from './urls';

export async function getSwitch(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(`${ADDRESS}/switch`, config);
  return result.data;
}

export async function postSwitch(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  await axios.post(`${ADDRESS}/switch/create`, config);
}
