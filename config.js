/**
 * Configuration module for Potential Octo application
 * Manages environment variables and application settings
 */

const getConfig = () => {
  return {
    // Server configuration
    server: {
      port: process.env.PORT || 3000,
      host: process.env.HOST || 'localhost',
      env: process.env.NODE_ENV || 'development',
    },

    // CORS configuration
    cors: {
      origin: process.env.CORS_ORIGIN || '*',
      credentials: process.env.CORS_CREDENTIALS === 'true',
    },

    // API configuration
    api: {
      baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
      timeout: parseInt(process.env.API_TIMEOUT || '5000'),
    },

    // Feature flags
    features: {
      enableLogging: process.env.ENABLE_LOGGING !== 'false',
      enableMetrics: process.env.ENABLE_METRICS === 'true',
      enableDevTools: process.env.NODE_ENV === 'development',
    },

    // LLM Configuration
    llm: {
      contextLimit: parseInt(process.env.LLM_CONTEXT_LIMIT || '8000'),
      recommendedPromptSize: parseInt(process.env.RECOMMENDED_PROMPT_SIZE || '5000'),
      bufferPercentage: parseFloat(process.env.BUFFER_PERCENTAGE || '0.7'),
    },
  };
};

module.exports = {
  getConfig,
  config: getConfig(),
};
