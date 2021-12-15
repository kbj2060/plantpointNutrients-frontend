import axios from 'axios';
import { ADDRESS } from './urls';

export async function getAutomation(label, filters) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data: filters
  };
  const result = await axios.post(`${ADDRESS}/${label}`, config);
  return result.data;
}

export async function saveAutomation(label, data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  await axios.post(`${ADDRESS}/${label}/create`, config);
}
