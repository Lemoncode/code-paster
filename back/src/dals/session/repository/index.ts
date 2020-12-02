import { envConstants } from 'core';
import * as mockRepository from './session.mock';
import * as repository from './session.repository';
import { SessionRepositoryContract } from './session.contract';

export const sessionRepository: SessionRepositoryContract = envConstants.isMockRepository
  ? mockRepository
  : repository;
