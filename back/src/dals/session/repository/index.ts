import { envConstants } from 'core/constants';
import * as mockRepository from './session.mock';
import * as repository from './session.repository';
import { SessionRepository } from './session.contract';

export const sessionRepository: SessionRepository = envConstants.isMockRepository
  ? mockRepository
  : repository;
