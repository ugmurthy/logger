//const winston = require('winston');
import winston from 'winston';

// specify logfile names if not - fallback to default
const allLogs = process.env.WINSTON_LOGS ?? 'logs/combined.log';
const errorLogs = process.env.WINSTON_ERROR_LOGS ?? 'log/error.log';

// Create a logger instance with configuration
export const logger = winston.createLogger({
  level: 'info', // Minimum log level
  format: winston.format.combine(
   
    winston.format.prettyPrint(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),    
    winston.format.json() // Log in JSON format
    
  ),
  transports: [
    
    // File transport for all logs
    new winston.transports.File({ filename: `${allLogs}` }),
    // File transport for error logs only
    new winston.transports.File({ filename: `${errorLogs}`, level: 'error' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(// Console transport
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        //winston.format.simple(),
         winston.format.printf((nfo)=>{
          return `${nfo.timestamp} - ${nfo.level}: ${nfo.message}`
        })
      ) 
    }))
}