// CommonJS entry point
'use strict';

// Re-export from the ESM version
const { logger, Logger } = require('../index.js');

module.exports = {
  logger,
  Logger
};