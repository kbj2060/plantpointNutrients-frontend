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
