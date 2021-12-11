import axios from 'axios';
import { ADDRESS } from './urls';

export async function getMachine(filters) {
  const result = await axios.get(`${ADDRESS}/machines`);
  return result.data;
}
