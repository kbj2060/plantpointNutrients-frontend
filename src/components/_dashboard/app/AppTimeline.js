import { useState, useEffect } from 'react';
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
import { getMachine } from '../../../api/machine';
import { fDateTime } from '../../../utils/formatTime';
import EN2KR from '../../../utils/EN2KR';

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { status, name, createdAt, controlledBy } = item;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (status === 1 && 'success.main') || (status === 0 && 'error.main') || 'primary.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">
          {EN2KR[name]} {EN2KR[status ? 'on' : 'off']} by {controlledBy}
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
      const machines = await getMachine();
      const result = switches.map((_switch) => {
        const mFound = machines.find((machine) => machine.id === _switch[0].machine_id);
        return {
          name: mFound.name,
          controlledBy: _switch[1],
          status: _switch[0].status,
          createdAt: _switch[0].createdAt
        };
      });
      setStates(result);
    }
    updateStates();
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
            <OrderItem key={index} item={item} isLast={index === states.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
