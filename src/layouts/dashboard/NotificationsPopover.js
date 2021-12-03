import faker from 'faker';
import PropTypes from 'prop-types';
import { noCase } from 'change-case';
import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { set, sub, formatDistanceToNowStrict, isToday } from 'date-fns';
import { Icon } from '@iconify/react';
import bellFill from '@iconify/icons-eva/bell-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import { alpha } from '@mui/material/styles';
import {
  Box,
  List,
  Badge,
  Avatar,
  IconButton,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton
} from '@mui/material';
// utils
import { mackImgNotificationAvatar } from '../../utils/mockImages';
// components
import Scrollbar from '../../components/Scrollbar';
import MenuPopover from '../../components/MenuPopover';

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: 'Your order is placed',
    description: 'waiting for shipping',
    avatar: mackImgNotificationAvatar('warning'),
    type: '',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isToday: isToday(set(new Date(), { hours: 10, minutes: 30 }))
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.findName(),
    description: 'answered to your comment on the Minimal',
    avatar: mackImgNotificationAvatar('error'),
    type: 'friend_interactive',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isToday: isToday(sub(new Date(), { days: 2, hours: 3, minutes: 30 }))
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new message',
    description: '5 unread messages',
    avatar: mackImgNotificationAvatar('warning'),
    type: '',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isToday: isToday(sub(new Date(), { days: 2, hours: 3, minutes: 30 }))
  },
  {
    id: faker.datatype.uuid(),
    title: 'You have new mail',
    description: 'sent from Guido Padberg',
    avatar: mackImgNotificationAvatar('info'),
    type: '',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isToday: isToday(sub(new Date(), { days: 2, hours: 3, minutes: 30 }))
  },
  {
    id: faker.datatype.uuid(),
    title: 'Delivery processing',
    description: 'Your order is being shipped',
    avatar: mackImgNotificationAvatar('info'),
    type: '',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isToday: isToday(sub(new Date(), { days: 3, hours: 3, minutes: 30 }))
  }
];

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
        &nbsp; {noCase(notification.description)}
      </Typography>
    </Typography>
  );

  if (notification.type === 'order_placed') {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_package.svg" />,
      title
    };
  }
  if (notification.type === 'order_shipped') {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_shipping.svg" />,
      title
    };
  }
  if (notification.type === 'mail') {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_mail.svg" />,
      title
    };
  }
  if (notification.type === 'chat_message') {
    return {
      avatar: <img alt={notification.title} src="/static/icons/ic_notification_chat.svg" />,
      title
    };
  }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired
};

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      to="#"
      disableGutters
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        mt: '1px',
        ...(notification.isToday && {
          bgcolor: 'action.selected'
        })
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: 'text.disabled'
            }}
          >
            <Box component={Icon} icon={clockFill} sx={{ mr: 0.5, width: 16, height: 16 }} />
            {formatDistanceToNowStrict(new Date(notification.createdAt), { unit: 'hour' })}
          </Typography>
        }
      />
    </ListItemButton>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalIsToday = notifications.filter((item) => item.isToday === true).length;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Badge badgeContent={totalIsToday} color="error">
          <Icon icon={bellFill} width={20} height={20} />
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Scrollbar sx={{ height: { xs: 340, sm: 'auto' } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                알림
              </ListSubheader>
            }
          >
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>
      </MenuPopover>
    </>
  );
}
