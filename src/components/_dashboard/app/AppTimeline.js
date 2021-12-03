import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: '분무 자동화 꺼짐',
    time: faker.date.past(),
    type: 'order3'
  },
  {
    title: '분무 자동화 켜짐',
    time: faker.date.past(),
    type: 'order2'
  },
  {
    title: '조명 꺼짐',
    time: faker.date.past(),
    type: 'order3'
  },
  {
    title: '순환 시스템 켜짐',
    time: faker.date.past(),
    type: 'order2'
  },
  {
    title: '급수 시스템 에러 발생',
    time: faker.date.past(),
    type: 'order5'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        {/* TYPE을 여러 가지로 나누어 분류할 것. 예를 들어, 빨강 켜짐, 파랑 꺼짐, 노랑 에러 등 */}
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppTimeline() {
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
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
