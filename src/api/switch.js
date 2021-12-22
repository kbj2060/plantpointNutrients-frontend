import axios from 'axios';
import { URLS } from './urls';

export async function getSwitch(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(URLS.GET_SWITCH, config);
  return result.data;
}

export async function postSwitch(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  await axios.post(URLS.CREATE_SWITCH, config);
}
