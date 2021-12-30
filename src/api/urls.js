// export const ADDRESS = 'http://127.0.0.1:8000';
import { ADDRESS } from '../config/index';

export const URLS = {
  LOGIN: `${ADDRESS}/login`,
  REGISTER: `${ADDRESS}/register`,
  GET_SWITCH: `${ADDRESS}/switch`,
  CREATE_SWITCH: `${ADDRESS}/switch/create`,
  GET_SENSOR: `${ADDRESS}/sensor`,
  GET_REPORT: `${ADDRESS}/report`,
  CREATE_REPORT: `${ADDRESS}/report/create`,
  GET_MACHINE: `${ADDRESS}/machines`
};
