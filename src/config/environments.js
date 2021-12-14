import temperature16Regular from '@iconify/icons-fluent/temperature-16-regular';
import humidityIcon from '@iconify/icons-iwwa/humidity';
import palette from '../theme/palette';

export class EnvironmentConfig {
  config = [
    {
      label: 'temperature',
      icon: temperature16Regular,
      color: palette.primary
    },
    {
      label: 'humidity',
      icon: humidityIcon,
      color: palette.info
    }
  ];
}
