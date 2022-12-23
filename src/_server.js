const express = require('express');
const env = require('./config/envConfig.js');
const preRoute = require('./middlewares/preRoute.js');

const app = express();

preRoute(app);

app
  .listen(env.PORT)
  .on('error', (error) => console.error(error))
  .on('listening', () => console.log('[⚡️server]: 🏃‍♂️server started '));

// -- handle global errors -->
process.on('uncaughtException', (error) => console.error(error));
