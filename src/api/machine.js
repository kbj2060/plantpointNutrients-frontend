import axios from 'axios';
import { ADDRESS } from './urls';

export async function getMachine(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.get(`${ADDRESS}/machines`, config);
  return result.data;
}
