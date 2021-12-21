import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Page from '../components/Page';
import RegisterForm from '../components/authentication/register/RegisterForm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="등록">
      <Container maxWidth="sm">
        <ContentStyle>
          <RegisterForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
