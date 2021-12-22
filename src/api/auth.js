import axios from 'axios';
import { URLS } from './urls';

export async function login(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  return axios.post(URLS.LOGIN, config);
}

export async function register(data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    data
  };
  return axios.post(URLS.REGISTER, config);
}
