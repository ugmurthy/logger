import {logger} from './index.js'

// Example usage
function example() {
  try {
    // Different log levels
    logger.info('Application started');
    logger.debug('Debugging data processing');
    logger.warn('Potential issue detected');

    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    // Log error with additional metadata
    logger.error('Error occurred', { 
      message: error.message,
      stack: error.stack
    });
  }
}

example();
