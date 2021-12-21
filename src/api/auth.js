import axios from 'axios';
import { ADDRESS } from './urls';

export async function login(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  return axios.post(`${ADDRESS}/login`, config);
}

export async function register(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  return axios.post(`${ADDRESS}/register`, config);
}
