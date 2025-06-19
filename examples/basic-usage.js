// Example of basic usage of @ugm/logger
import { logger } from '@ugm/logger';

// Configure environment variables if needed
// process.env.WINSTON_LOGS = 'custom/path/combined.log';
// process.env.WINSTON_ERROR_LOGS = 'custom/path/error.log';

// Simple function that uses logging
function processUserData(userData) {
  logger.info('Starting to process user data', { userId: userData.id });
  
  try {
    // Simulate some processing
    logger.debug('Processing user data', { 
      userId: userData.id,
      dataSize: JSON.stringify(userData).length
    });
    
    if (!userData.email) {
      logger.warn('User has no email address', { userId: userData.id });
    }
    
    // Simulate successful processing
    logger.info('Successfully processed user data', { userId: userData.id });
    return true;
  } catch (error) {
    // Log any errors that occur
    logger.error('Failed to process user data', {
      userId: userData.id,
      error: error.message,
      stack: error.stack
    });
    return false;
  }
}

// Example usage
const user = {
  id: 'user123',
  name: 'John Doe',
  email: 'john@example.com'
};

processUserData(user);

// Example with error
const invalidUser = {
  id: 'user456',
  name: 'Jane Doe'
  // Missing email
};

processUserData(invalidUser);

// Simulate an error
try {
  throw new Error('Something went wrong!');
} catch (error) {
  logger.error('Application error', {
    message: error.message,
    stack: error.stack
  });
}

console.log('Check the logs directory for the generated log files.');