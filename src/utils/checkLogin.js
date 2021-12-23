import { store } from '../redux/store';

export const checkLogin = () => store.getState().authentication.login.status === 'SUCCESS';
