// This file is used to create a CommonJS wrapper for the ESM modules
// It will be compiled to dist/cjs/index.js

// Import the ESM module
import { logger, Logger } from './index.js';

// Export as CommonJS
export { logger, Logger };