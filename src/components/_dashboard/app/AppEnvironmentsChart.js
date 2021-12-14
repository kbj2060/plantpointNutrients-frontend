import { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box } from '@mui/material';
import moment from 'moment';
import { BaseOptionChart } from '../../charts';
import { getEnvironment } from '../../../api/environment';
import { ENVIRONMENTS_CHART_UPDATE_TIME } from '../../../config/time';
import EN2KR from '../../../utils/EN2KR';

export default function AppEnvironmentsChart() {
  const [states, setStates] = useState([]);

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [1, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid'] },
    xaxis: {
      type: 'datetime',
      min: new Date().setHours(0, 0, 0, 0),
      max: new Date().setHours(23, 59, 59, 59),
      labels: {
        datetimeUTC: false
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: { format: 'HH:mm:ss' },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        }
      }
    }
  });

  useEffect(() => {
    function updateData(response) {
      return response.map((v) => [moment(v.createdAt), v.value]);
    }

    const setSeries = (data, name) => ({
      type: 'line',
      name: EN2KR[name],
      data
    });

    async function updateEnvironment(label) {
      const environment = await getEnvironment(label, { today: true }).then((res) =>
        updateData(res)
      );
      const sEnvironment = await setSeries(environment, label);
      return sEnvironment;
    }

    async function updateStates() {
      const t = await updateEnvironment('temperature');
      const h = await updateEnvironment('humidity');
      setStates([t, h]);
    }

    updateStates();
    const eInterval = setInterval(() => {
      updateStates();
    }, ENVIRONMENTS_CHART_UPDATE_TIME);

    return () => {
      clearInterval(eInterval);
    };
  }, []);

  return (
    <Card>
      <CardHeader title="환경 모니터링" subheader="온도와 습도" />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={states} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
