import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Typography,
  Card,
  Modal
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { register } from '../../../api/auth';
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

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('이름을 적어주세요.'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('이메일을 적어주세요.'),
    password: Yup.string().required('비밀번호를 적어주세요.')
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (info) => {
      register(info)
        .then(({ data }) => {
          if (data) {
            const { name, authorization } = data;
            store.dispatch(loginSuccess(name, authorization));
            navigate('/dashboard', { replace: true });
          }
        })
        .catch((error) => {
          handleOpen();
        });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullwidth
              label="이름"
              {...getFieldProps('name')}
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField
              fullwidth
              autoComplete="username"
              type="email"
              label="이메일"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullwidth
              autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="비밀번호"
              {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button fullwidth size="large" type="submit" variant="contained">
              Register
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
              styles={{ margin: '0 auto' }}
            />
            <Stack sx={{ padding: '5% 0' }} direction="row" spacing={10} justifyContent="center">
              <Typography
                sx={{
                  color: '#005249',
                  fontWeight: 'bold'
                }}
              >
                이메일이 이미 존재합니다.
              </Typography>
            </Stack>
          </ModalStyle>
        </Modal>
      )}
    </>
  );
}
