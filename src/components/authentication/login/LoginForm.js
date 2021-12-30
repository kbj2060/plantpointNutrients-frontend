import * as Yup from 'yup';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Card,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Modal,
  Typography,
  Button
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

import { login } from '../../../api/auth';
import { store } from '../../../redux/store';
import { loginSuccess } from '../../../redux/modules/Authentication';

const ModalStyle = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '40%',
    fontSize: '0.7em !important'
  },
  [theme.breakpoints.down('sm')]: {
    width: '60%',
    fontSize: '0.7em !important'
  },
  [theme.breakpoints.up('lg')]: {
    width: '20%'
  },
  width: '30%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  backgroundImage: `linear-gradient(135deg, ${alpha('#ffffff', 0)} 0%, ${alpha(
    '#ffffff',
    0.24
  )} 100%)`,
  padding: theme.spacing(3, 3)
}));

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: (info) => {
      login(info)
        .then(({ data }) => {
          const { name, authorization } = data;
          store.dispatch(loginSuccess(name, authorization));
          navigate('/dashboard/app', { replace: true });
        })
        .catch(() => {
          handleOpen();
        });
    }
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullwidth="true"
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullwidth="true"
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
              label="기억"
            />
            <Button fullwidth="true" size="large" type="submit" variant="contained">
              로그인
            </Button>
          </Stack>
        </Form>
      </FormikProvider>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <ModalStyle>
            <Stack direction="row" spacing={5} justifyContent="flex-end">
              <IconButton color="error" size="large" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
            <img
              alt="login_failed"
              src="/static/illustrations/illustration_login_failed.png"
              style={{ margin: '0 auto' }}
            />
            <Stack sx={{ padding: '5% 0' }} direction="row" spacing={10} justifyContent="center">
              <Typography
                sx={{
                  color: '#005249',
                  fontWeight: 'bold'
                }}
              >
                아이디 혹은 비밀번호를 확인해주세요.
              </Typography>
            </Stack>
          </ModalStyle>
        </Modal>
      )}
    </>
  );
}
