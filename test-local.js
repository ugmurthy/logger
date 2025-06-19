// Test the logger module locally before publishing
import { logger, Logger } from './src/index.js';

console.log('Testing @ugm/logger locally...');

// Test direct logger import
console.log('\nTesting direct logger import:');
logger.info('This is an info message from the direct logger import');
logger.warn('This is a warning message from the direct logger import');
logger.error('This is an error message from the direct logger import');

// Test Logger class
console.log('\nTesting Logger class:');
const loggerInstance = new Logger();
loggerInstance.info('This is an info message from the Logger class');
loggerInstance.warn('This is a warning message from the Logger class');
loggerInstance.error('This is an error message from the Logger class');

console.log('\nCheck the logs directory for the generated log files.');
console.log('If you see log messages in the console and files are created in the logs directory, the module is working correctly!');