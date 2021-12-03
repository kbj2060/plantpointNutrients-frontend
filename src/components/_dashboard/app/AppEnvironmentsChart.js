import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';

import { Card, CardHeader, Box } from '@mui/material';
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '습도',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: '온도',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }
];

export default function AppEnvironmentsChart() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid'] },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003'
    ],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="환경" subheader="온도 및 습도" />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}