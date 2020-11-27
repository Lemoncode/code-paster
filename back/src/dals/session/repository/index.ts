import { envConstants } from 'core/constants';
import * as mockRepository from './session.mock';
//TODO: change to session.db
import * as repository from './session.repository';
import { SessionRepository } from './session.contract';

export const sessionRepository: SessionRepository = envConstants.isMockRepository
  ? mockRepository
  : repository;
