import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import { fShortDate } from '../utils/formatTime';

// ----------------------------------------------------------------------

const reports = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  level: 4,
  name: faker.name.findName(),
  process: 'kbj',
  date: fShortDate(faker.date.past())
}));

export default reports;
