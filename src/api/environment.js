import axios from 'axios';
import { ADDRESS } from '../config/index';

export async function getEnvironment(label, filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(`${ADDRESS}/${label}`, config);
  return result.data;
}
