import { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import PropTypes, { string } from 'prop-types';
import { Card, CardHeader, Box } from '@mui/material';
import update from 'immutability-helper';
import moment from 'moment';

import { BaseOptionChart } from '../../charts';
import { getEnvironment } from '../../../api/environment';

AppEnvironmentsChart.propTypes = {
  label: PropTypes.string
};

export default function AppEnvironmentsChart() {
  const [states, setStates] = useState([]);

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [1, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid'] },
    labels: [+new Date().setHours(0, 0, 0, 0), +new Date().setHours(23, 59, 59, 59)],
    xaxis: {
      type: 'datetime'
    },
    tooltip: {
      shared: true,
      intersect: false,
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
      return response.map((v) => [Date.parse(v.createdAt), v.value]);
    }

    const setSeries = (data, name) => ({
      type: 'line',
      name,
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
      console.log([t, h]);
      setStates([t, h]);
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
    <Card>
      <CardHeader title="환경" subheader="temperature & humidity" />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={states} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
