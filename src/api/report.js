import axios from 'axios';
import { ADDRESS } from './urls';

export async function getReport(filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(`${ADDRESS}/report`, config);
  return result.data;
}
