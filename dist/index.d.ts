import winston from 'winston';

// Export the logger instance
export const logger: winston.Logger;

// Export Logger class for backward compatibility
export class Logger {
  constructor();
  
  // Include all winston.Logger methods
  log: winston.Logger['log'];
  error: winston.Logger['error'];
  warn: winston.Logger['warn'];
  info: winston.Logger['info'];
  debug: winston.Logger['debug'];
  verbose: winston.Logger['verbose'];
  silly: winston.Logger['silly'];
}