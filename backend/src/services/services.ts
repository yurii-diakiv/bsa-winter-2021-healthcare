import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { Document } from './document-service/document-service.service';
import { Auth } from './auth/auth.service';
import { User } from './user-service/user-service.service';
import { Clinic } from './clinic-service/clinic-service.service';
import { Geolocation } from './geolocation/geolocation.service';
import { Logger } from './logger/logger.service';
import { Diagnosis } from './diagnosis/diagnosis.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const document = new Document();
const auth = new Auth();
const user = new User();
const clinic = new Clinic();
const geolocation = new Geolocation();
const diagnosis = new Diagnosis();

export {
  appAsyncStorage,
  logger,
  auth,
  user,
  clinic,
  geolocation,
  diagnosis,
  document,
};
