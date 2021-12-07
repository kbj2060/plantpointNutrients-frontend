import axios from 'axios';
import { ADDRESS } from './urls';

export async function getEnvironment(label, filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  return axios.post(`${ADDRESS}/${label}`, config).then((res) => res.data);
}
