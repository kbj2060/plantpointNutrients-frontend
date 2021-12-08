import { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';

import { Card, CardHeader, Box } from '@mui/material';
import { BaseOptionChart } from '../../charts';
import { getEnvironment } from '../../../api/environment';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'humidity',
    type: 'line',
    data: []
  },
  {
    name: 'temperature',
    type: 'line',
    data: []
  }
];

export default function AppEnvironmentsChart() {
  const [temperature, setTemperature] = useState([]);
  const [humidity, setHumidity] = useState([]);
  const [labels, setLabels] = useState([]);

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'solid'] },
    labels: [],
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

  useEffect(() => {
    // redux 로 올려서 useSelector를 통해 subscribe 하도록 만들기.
    function getTemperature() {
      getEnvironment('temperature', { today: true }).then((res) => {
        const result = res === null ? [] : res;
        setTemperature(result);
      });
    }
    getTemperature();
    const eInterval = setInterval(() => {
      getTemperature();
      console.log(temperature);
    }, 10 * 1000);

    return () => {
      clearInterval(eInterval);
    };
  }, []);

  return (
    <Card>
      <CardHeader title="환경" subheader="온도 및 습도" />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
