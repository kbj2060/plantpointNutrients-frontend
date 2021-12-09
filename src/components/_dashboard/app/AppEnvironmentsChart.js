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

export default function AppEnvironmentsChart({ label }) {
  const [states, setStates] = useState({
    name: label,
    type: 'line',
    data: []
  });

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [1, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid'] },
    labels: [],
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
    function updateValue(label) {
      getEnvironment(label, { today: true }).then((res) => {
        const result = res === null ? [] : res;
        const series = result.map((v) => [Date.parse(v.createdAt), v.value]);
        setStates(update(states, { data: { $set: series } }));
      });
    }

    updateValue(label);
    const eInterval = setInterval(() => {
      updateValue(label);
    }, 60 * 1000);

    return () => {
      clearInterval(eInterval);
    };
  }, []);

  return (
    <Card>
      <CardHeader title="환경" subheader={label} />
      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={[states]} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
