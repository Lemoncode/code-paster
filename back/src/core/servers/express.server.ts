import express from 'express';
import { corsOptions } from './cors';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(corsOptions);

  return app;
};
