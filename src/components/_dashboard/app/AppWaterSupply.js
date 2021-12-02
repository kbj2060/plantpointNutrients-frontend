import * as React from 'react';
import { Icon } from '@iconify/react';
import bxWater from '@iconify/icons-bx/bx-water';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Stack, IconButton, Box, Modal, ButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

const ModalStyle = styled(Card)(({ theme }) => ({
  width: '30%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`,
  padding: '3%',
  border: 'solid 1px'
}));

export default function AppWaterSupply() {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(10);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAmountUp = () => setAmount(amount + 1);
  const handleAmountDown = () => amount > 0 && setAmount(amount - 1);
  const handleOK = () => {
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };
  return (
    <>
      <RootStyle onClick={handleOpen}>
        <IconWrapperStyle>
          <Icon icon={bxWater} width={24} height={24} />
        </IconWrapperStyle>
        <Typography variant="h3">{amount}L</Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          물공급량
        </Typography>
      </RootStyle>
      <Modal open={open} onClose={handleClose}>
        <ModalStyle>
          <Stack direction="row">
            <Typography variant="h3" sx={{ margin: 'auto' }}>
              {amount}L
            </Typography>
            <Box
              sx={{
                display: 'flex',
                '& > *': {
                  m: 1
                }
              }}
            >
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                color="info"
                sx={{
                  border: 'solid 1px'
                }}
              >
                <IconButton size="small" onClick={handleAmountUp}>
                  <ArrowDropUpIcon />
                </IconButton>
                <IconButton size="small" onClick={handleAmountDown}>
                  <ArrowDropDownIcon />
                </IconButton>
              </ButtonGroup>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
            <IconButton color="primary" size="small" onClick={handleOK}>
              <CheckIcon />
            </IconButton>
            <IconButton color="error" size="small" onClick={handleCancel}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </ModalStyle>
      </Modal>
    </>
  );
}
