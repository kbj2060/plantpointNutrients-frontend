import axios from 'axios';
import { URLS } from './urls';

export async function getTemperature(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      limit: 1,
      today: false
    }
  };
  return axios.post(URLS.GET_TEMPERATURE, config).then((res) => res.data);
}
