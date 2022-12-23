const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
``;

module.exports = (app) => {
  if (!app) throw new Error('PreRoute middleware got nothing');
  app
    .use(cors())
    .use(express.json())
    .use(morgan('[⚡️:status] [:method] :url ... :response-time ms'))
    .use('/app', express.static(path.resolve(__dirname, '../static')));
};
