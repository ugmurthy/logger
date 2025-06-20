// Test the logger module using CommonJS require
// This script simulates how users would use the module with require()

// Set NODE_ENV to development to see console output
process.env.NODE_ENV = 'development';

console.log('Testing @ugm/logger with CommonJS require()...');

// We're testing the local version, so we need to point to the right path
// In a real scenario, users would do: const { logger } = require('@ugm/logger')
const { logger, Logger } = require('./dist/cjs/index.js');

// Test direct logger import
console.log('\nTesting direct logger import:');
logger.info('This is an info message from the direct logger import (CommonJS)');
logger.warn('This is a warning message from the direct logger import (CommonJS)');
logger.error('This is an error message from the direct logger import (CommonJS)');

// Test Logger class
console.log('\nTesting Logger class:');
const loggerInstance = new Logger();
loggerInstance.info('This is an info message from the Logger class (CommonJS)');
loggerInstance.warn('This is a warning message from the Logger class (CommonJS)');
loggerInstance.error('This is an error message from the Logger class (CommonJS)');

console.log('\nCheck the logs directory for the generated log files.');
console.log('If you see log messages in the console and files are created in the logs directory, the module is working correctly!');