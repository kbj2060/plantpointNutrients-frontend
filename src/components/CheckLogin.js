import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkLogin } from '../utils/checkLogin';

export default function CheckLogin() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkLogin()) {
      if (pathname === '/register') return;
      navigate('/login');
    }
  }, [pathname, navigate]);

  return null;
}
