import axios from 'axios';
import { ADDRESS } from './urls';

export async function login(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  await axios.post(`${ADDRESS}/login`, config);
}
