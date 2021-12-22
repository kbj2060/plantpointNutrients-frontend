import { useRef, useState } from 'react';
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, Typography, Avatar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuPopover from '../../components/MenuPopover';
import account from '../../_mocks_/account';
import { store } from '../../redux/store';
import { logout } from '../../redux/modules/Authentication';

export default function AccountPopover() {
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const username = store.getState().authentication.status.currentUser;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    store.dispatch(logout());
    navigate('/login', { replace: true });
  };
  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        fullwidth="true"
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {username}
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullwidth color="inherit" variant="outlined" onClick={handleClick}>
            로그아웃
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
