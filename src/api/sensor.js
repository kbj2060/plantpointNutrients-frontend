import axios from 'axios';
import { ADDRESS } from './urls';

export async function getSensor(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.get(`${ADDRESS}/sensor`, config);
  return result.data;
}
