import faker from 'faker';
import { fShortDate } from '../utils/formatTime';

// ----------------------------------------------------------------------

const reports = [...Array(24)].map(() => ({
  id: faker.datatype.uuid(),
  level: faker.datatype.number({ min: 1, max: 3, precision: 1 }),
  name: faker.name.findName(),
  process: faker.name.findName(),
  date: fShortDate(faker.date.past())
}));

export default reports;
