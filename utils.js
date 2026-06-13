/**
 * Utility functions for Potential Octo application
 * Provides common helper functions and utilities
 */

/**
 * Calculate optimal prompt size based on context limit
 * @param {number} contextLimit - The LLM context window size
 * @param {number} bufferPercentage - Buffer percentage (0-1)
 * @returns {number} Recommended prompt size in tokens
 */
const calculateOptimalPromptSize = (contextLimit, bufferPercentage = 0.7) => {
  return Math.floor(contextLimit * bufferPercentage);
};

/**
 * Validate prompt size against LLM context limits
 * @param {number} promptTokens - Estimated prompt tokens
 * @param {number} contextLimit - LLM context window limit
 * @returns {object} Validation result with status and message
 */
const validatePromptSize = (promptTokens, contextLimit) => {
  const utilization = (promptTokens / contextLimit) * 100;
  const isValid = utilization <= 80;

  return {
    isValid,
    utilization: utilization.toFixed(2),
    message: isValid
      ? `Prompt size is optimal (${utilization.toFixed(2)}% of context)`
      : `Prompt size exceeds recommended limit (${utilization.toFixed(2)}% of context)`,
  };
};

/**
 * Format bytes to human-readable size
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size string
 */
const formatFileSize = (bytes) => {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Async wait function
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} Promise that resolves after delay
 */
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Retry function with exponential backoff
 * @param {Function} fn - Function to retry
 * @param {number} maxRetries - Maximum retry attempts
 * @param {number} initialDelay - Initial delay in ms
 * @returns {Promise} Result of function execution
 */
const retryWithBackoff = async (fn, maxRetries = 3, initialDelay = 1000) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      const delay = initialDelay * Math.pow(2, i);
      await wait(delay);
    }
  }
};

module.exports = {
  calculateOptimalPromptSize,
  validatePromptSize,
  formatFileSize,
  isValidEmail,
  wait,
  retryWithBackoff,
};
