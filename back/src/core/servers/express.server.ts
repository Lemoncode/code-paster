import express from 'express';
import bodyParser from 'body-parser';
import { corsOptions } from './cors'

export const createApp = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(corsOptions);
  return app;
};
