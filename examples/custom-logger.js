// Example of customizing the @ugm/logger
import { logger } from '@ugm/logger';
import winston from 'winston';

// Example: Add a custom transport
logger.add(
  new winston.transports.File({ 
    filename: 'logs/custom.log',
    level: 'debug'
  })
);

// Example: Create a child logger with custom metadata
const userLogger = logger.child({ 
  component: 'user-service',
  version: '1.0.0'
});

// Example: Create a custom format
const customFormat = winston.format.printf(({ level, message, timestamp, ...metadata }) => {
  return `[${timestamp}] [${level.toUpperCase()}] 🔶 ${message} ${
    Object.keys(metadata).length ? JSON.stringify(metadata) : ''
  }`;
});

// Example: Create a completely custom logger
const customLogger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize(),
    customFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ 
      filename: 'logs/custom-advanced.log' 
    })
  ]
});

// Usage examples
logger.info('Standard logger info message');
userLogger.info('User service info message');
customLogger.info('Custom logger info message', { customField: 'value' });

// Example with error
try {
  throw new Error('Custom error occurred');
} catch (error) {
  userLogger.error('Error in user service', {
    error: error.message,
    stack: error.stack
  });
  
  customLogger.error('Error with custom logger', {
    error: error.message,
    code: 'ERR_CUSTOM'
  });
}

console.log('Check the logs directory for the generated log files.');