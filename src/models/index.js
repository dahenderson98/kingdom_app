// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Sex = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const Language = {
  "ENGLISH": "ENGLISH",
  "SPANISH": "SPANISH",
  "MANDARIN": "MANDARIN"
};

const { Missionary, Area, Zone } = initSchema(schema);

export {
  Missionary,
  Area,
  Zone,
  Sex,
  Language
};