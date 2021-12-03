import { useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Stack, IconButton, Modal, ButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EN2KR from '../../../utils/EN2KR';
import formatUnit from '../../../utils/formatUnit';

const RootStyle = styled(Card)(({ theme, backgroundColor }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: backgroundColor.darker,
  backgroundColor: backgroundColor.lighter
}));

const IconWrapperStyle = styled('div')(({ theme, backgroundColor }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: backgroundColor.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(backgroundColor.dark, 0)} 0%, ${alpha(
    backgroundColor.dark,
    0.24
  )} 100%)`
}));

const ModalStyle = styled(Card)(({ theme, backgroundColor }) => ({
  width: '30%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: backgroundColor.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(backgroundColor.dark, 0)} 0%, ${alpha(
    backgroundColor.dark,
    0.24
  )} 100%)`,
  padding: theme.spacing(3, 3)
}));

AutomationControlComponent.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.object
};

export default function AutomationControlComponent({ label, icon, color }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(10);

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
      <RootStyle onClick={handleOpen} backgroundColor={color}>
        <IconWrapperStyle backgroundColor={color}>
          <Icon icon={icon} width={24} height={24} />
        </IconWrapperStyle>
        <Typography variant="h3">
          {amount} {formatUnit[label]}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          {EN2KR[label]}
        </Typography>
      </RootStyle>
      <Modal open={open} onClose={handleClose}>
        <ModalStyle backgroundColor={color}>
          <Typography variant="subtitle2">{EN2KR[label]}</Typography>
          <Stack direction="row">
            <Typography variant="h3" sx={{ margin: 'auto' }}>
              {amount} {formatUnit[label]}
            </Typography>
            <ButtonGroup orientation="vertical" color="inherit">
              <IconButton size="small" onClick={handleAmountUp}>
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton size="small" onClick={handleAmountDown}>
                <ArrowDropDownIcon />
              </IconButton>
            </ButtonGroup>
          </Stack>
          <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
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
