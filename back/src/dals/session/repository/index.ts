import { envConstants } from 'core/constants';
import * as mockRepository from './session.mock';
//TODO: change to session.db
import * as repository from './session.mock';
import { SessionRepository } from './session.contract';

export const userRepository: SessionRepository = envConstants.isMockRepository
  ? mockRepository
  : repository;
