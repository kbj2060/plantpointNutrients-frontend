import React, { useState, useEffect } from 'react';
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
import EN2KR from '../../../utils/EN2KR';
import { createReport } from '../../../api/report';

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
          {EN2KR[name]} {EN2KR[Number(status) ? 'on' : 'off']} by {controlledBy}
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
      if (switches.length < 5) {
        createReport({
          problem:
            'User 혹은 Machine의 데이터가 Switch 데이터에 맞지 않거나 데이터가 5개 이하입니다. 위 세 테이블 검사바랍니다.',
          level: 2
        });
      }
      const result = switches.map((_switch) => ({
        name: _switch.machinename,
        controlledBy: _switch.username,
        status: Number(_switch.status),
        createdAt: _switch.createdAt
      }));
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
