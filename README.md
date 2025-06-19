## @ugm/logger

A simple and easy-to-use logger based on [Winston](https://github.com/winstonjs/winston)

## Description

`@ugm/logger` is a lightweight logging utility built on top of Winston, designed to provide a straightforward and flexible logging solution for Node.js applications. Its key objective is to get up and running quickly with default logging to `logs/combined.log` for all logs and `logs/error.log` for errors.

## Installation

```bash
npm install @ugm/logger

## or 

pnpm add @ugm/logger
```

## Usage
The logger is pre-configured to write all logs to `logs/combined.log` and error logs to `logs/error.log`. Here's a basic example:


```javascript
import { Logger } from '@ugm/logger';

const logger = new Logger();

logger.info('This is an info message'); // Logged to logs/combined.log
logger.error('This is an error message'); // Logged to logs/combined.log and logs/error.log
logger.debug('This is a debug message'); // Logged to logs/combined.log
```

You can change default logfile names by using following `env` variables to point to an alternate logfile names

```javascript
import { logger } from '@ugm/logger';

const logger = new Logger();

logger.info('This is an info message'); // Logged to logs/combined.log
logger.error('This is an error message'); // Logged to logs/combined.log and logs/error.log
logger.debug('This is a debug message'); // Logged to logs/combined.log

```

```
WINSTON_LOGS
WINSTON_ERROR_LOGS
```
for advances configurations, refer to the [Winston documentation](https://github.com/winstonjs/winston)