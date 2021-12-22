import axios from 'axios';
import { URLS } from './urls';

export async function getReport(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(URLS.GET_REPORT, config);
  return result.data;
}
