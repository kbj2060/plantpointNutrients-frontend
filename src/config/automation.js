import { Icon } from '@iconify/react';
import bxWater from '@iconify/icons-bx/bx-water';
import cycleIcon from '@iconify/icons-entypo/cycle';
import sprayIcon from '@iconify/icons-mdi/spray';
import bottleIcon from '@iconify/icons-tabler/bottle';
import palette from '../theme/palette';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

export class AutomationConfig {
  config = [
    {
      label: 'watersupply',
      icon: bxWater,
      color: palette.info
    },
    {
      label: 'watercycle',
      icon: cycleIcon,
      color: palette.warning
    },
    {
      label: 'waterspray',
      icon: sprayIcon,
      color: palette.primary
    },
    {
      label: 'nutrientsupply',
      icon: bottleIcon,
      color: palette.error
    }
  ];
}
