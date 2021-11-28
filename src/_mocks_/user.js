import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import { fShortDate } from '../utils/formatTime';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: '워터펌프',
  date: fShortDate(faker.date.past()),
  controledBy: 'kbj',
  status: sample([0, 1])
}));

export default users;
