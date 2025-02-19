import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const USER_NAME = [
  'Raihan Alam',
  'Tanvir Mahmud',
  'Sumanta Majumder',
  'Ashraful Islam',
  'Mizanur Rahman',
  'Mohammad Rasel',
  'Rabbi Hossain',
  'Kamal Khan',
  'Mominul Islam',
  'Noman Ahmed',
  'Morshed Shanto',
  'Merajul Islam',
  'Rohan Ahmed',
  'Nahid Islam',
  'Tariqul Shagor',
  'Rakib Hossain',
  'Partho Roy',
  'Farid Ahmed',
  'Nazim Patwary',
  'Ramim Sheikh',
  'Nazmul Huda'

]
const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: USER_NAME[index],
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
