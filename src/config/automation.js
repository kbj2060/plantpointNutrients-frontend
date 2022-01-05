import bxWater from '@iconify/icons-bx/bx-water';
import cycleIcon from '@iconify/icons-entypo/cycle';
import sprayIcon from '@iconify/icons-mdi/spray';
import bottleIcon from '@iconify/icons-tabler/bottle';
import palette from '../theme/palette';

export class AutomationConfig {
  config = [
    {
      label: 'watersupply',
      icon: bxWater,
      color: palette.info,
      unit: 5
    },
    {
      label: 'sprayterm',
      icon: cycleIcon,
      color: palette.warning,
      unit: 5
    },
    {
      label: 'spraytime',
      icon: sprayIcon,
      color: palette.primary,
      unit: 1
    },
    {
      label: 'nutrientsupply',
      icon: bottleIcon,
      color: palette.error,
      unit: 1
    }
  ];
}
