import express from 'express';
import path from 'path';

import { createApp, createSocketServer } from 'core/servers';
import { connectToDB } from 'core/db';
import { envConstants } from 'core/constants';
import { api } from 'pods/room';

const app = createApp();
app.use(envConstants.API_URL, api);

const staticFilesPath = path.resolve(__dirname, envConstants.STATIC_FILES_PATH);
app.use('/', express.static(staticFilesPath));

const appServer = app.listen(envConstants.PORT, async () => {
  if(!envConstants.isMockRepository && envConstants.MONGODB_URI) {
    await connectToDB(envConstants.MONGODB_URI);
  }
  console.log(`Using ${envConstants.isMockRepository ? 'Mock' : 'DataBase'} for session storage`)
  console.log(`Server ready at http://localhost:${envConstants.PORT}${envConstants.API_URL}`);
});

createSocketServer(appServer);

