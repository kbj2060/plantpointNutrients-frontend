import axios from 'axios';
import { URLS } from './urls';

export async function getSensor(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.get(URLS.GET_SENSOR, config);
  return result.data;
}
