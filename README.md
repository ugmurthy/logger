# @ugm/logger

A simple and easy-to-use logger based on [Winston](https://github.com/winstonjs/winston)

## Description

`@ugm/logger` is a lightweight logging utility built on top of Winston, designed to provide a straightforward and flexible logging solution for Node.js applications. Its key objective is to get up and running quickly with default logging to `logs/combined.log` for all logs and `logs/error.log` for errors.

## Installation

```bash
npm install @ugm/logger

# or

pnpm add @ugm/logger
```

## Usage

The logger is pre-configured to write all logs to `logs/combined.log` and error logs to `logs/error.log`. There are two ways to use this logger:

### Method 1: Import the pre-configured logger instance

```javascript
import { logger } from '@ugm/logger';

// Use the logger directly
logger.info('This is an info message'); // Logged to logs/combined.log
logger.error('This is an error message'); // Logged to logs/combined.log and logs/error.log
logger.debug('This is a debug message'); // Logged to logs/combined.log
```

### Method 2: Use the Logger class (for backward compatibility)

```javascript
import { Logger } from '@ugm/logger';

const logger = new Logger();

logger.info('This is an info message'); // Logged to logs/combined.log
logger.error('This is an error message'); // Logged to logs/combined.log and logs/error.log
logger.debug('This is a debug message'); // Logged to logs/combined.log
```

## Configuration

You can change default logfile names by using the following environment variables:

```
WINSTON_LOGS        # Default: logs/combined.log
WINSTON_ERROR_LOGS  # Default: logs/error.log
```

For development environments (when `NODE_ENV` is not 'production'), logs will also be output to the console with colorization.

## Advanced Usage

For advanced configurations, refer to the [Winston documentation](https://github.com/winstonjs/winston).

## Examples

Check out the examples directory for more detailed usage examples:

- [Basic Usage](./examples/basic-usage.js) - Simple example of using the logger
- [Custom Logger](./examples/custom-logger.js) - Advanced example showing how to customize the logger

## Publishing

If you're a maintainer of this package, you can publish it to npm using:

```bash
# Login to npm (if not already logged in)
npm login

# Publish the package
pnpm publish
```

## License

ISC