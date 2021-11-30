import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import { fShortDate } from '../utils/formatTime';

// ----------------------------------------------------------------------

const reports = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  level: faker.datatype.number({ min: 1, max: 3, precision: 1 }),
  name: faker.name.findName(),
  process: faker.name.findName(),
  date: fShortDate(faker.date.past())
}));

export default reports;
