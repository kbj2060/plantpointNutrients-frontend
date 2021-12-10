import { useState, useEffect } from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';

import { getSwitch } from '../../../api/switch';
import { fDateTime } from '../../../utils/formatTime';

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { status, machine_id: machineId, createdAt } = item.Switch;
  const { name: controlledBy } = item;
  console.log(item);
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (status === 1 && 'primary.main') || (status === 0 && 'success.main') || 'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">
          {machineId} {status} by {controlledBy}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(createdAt)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppTimeline() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    async function updateStates() {
      const switches = await getSwitch({ limit: 5 });
      console.log(switches);
      setStates(switches);
    }

    updateStates();
    const eInterval = setInterval(() => {
      updateStates();
    }, 60 * 1000);

    return () => {
      clearInterval(eInterval);
    };
  }, []);

  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
      style={{
        height: '100%'
      }}
    >
      <CardHeader title="최근 기록" />
      <CardContent>
        <Timeline>
          {states.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === states.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
