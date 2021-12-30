// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Stack, IconButton, Modal, ButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EN2KR from '../../utils/EN2KR';
import formatUnit from '../../utils/formatUnit';
import { getAutomation, saveAutomation } from '../../api/automation';

const RootStyle = styled(Card)(({ theme, bg }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: bg.darker,
  backgroundColor: bg.lighter
}));

const IconWrapperStyle = styled('div')(({ theme, bg }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: bg.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(bg.dark, 0)} 0%, ${alpha(bg.dark, 0.24)} 100%)`
}));

const ModalStyle = styled(Card)(({ theme, bg }) => ({
  [theme.breakpoints.down('md')]: {
    width: '55%',
    height: 'auto'
  },
  width: '30%',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: bg.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(bg.dark, 0)} 0%, ${alpha(bg.dark, 0.24)} 100%)`,
  padding: theme.spacing(3, 3)
}));

AutomationControlComponent.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.object,
  unit: PropTypes.number
};

export default function AutomationControlComponent({ label, icon, color, unit }) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAmountUp = () => setAmount(amount + unit);
  const handleAmountDown = () => amount > 0 && setAmount(amount - unit);
  const handleOK = () => {
    saveAutomation(label, amount);
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };

  useEffect(() => {
    async function updateStates() {
      const automation = (await getAutomation(label, { limit: 1 }))[0];
      if (automation === undefined) {
        setAmount(0);
      } else {
        const amount = automation.quantity ?? automation.period;
        setAmount(amount);
      }
    }
    updateStates();
  }, [label]);
  return (
    <>
      <RootStyle onClick={handleOpen} bg={color}>
        <IconWrapperStyle bg={color}>
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
        <ModalStyle bg={color}>
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
