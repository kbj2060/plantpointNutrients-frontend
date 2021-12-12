import axios from 'axios';
import { ADDRESS } from './urls';

export async function getSensor(filters) {
  const result = await axios.get(`${ADDRESS}/sensor`);
  return result.data;
}
