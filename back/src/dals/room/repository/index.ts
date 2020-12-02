import { envConstants } from 'core';
import * as mockRepository from './room.mock';
import * as repository from './room.repository';
import { RoomRepositoryContract } from './room.contract';

export const roomRepository: RoomRepositoryContract = envConstants.isMockRepository
  ? mockRepository
  : repository;
