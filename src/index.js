// Main entry point for @ugm/logger
import { logger } from './logger.js';

// Re-export the logger instance
export { logger };

// For backward compatibility with the README examples
export class Logger {
  constructor() {
    return logger;
  }
}