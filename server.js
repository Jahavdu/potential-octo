/**
 * Main server file for Potential Octo application
 * Implements Express.js server with middleware and routes
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const { getConfig } = require('./config');
const { calculateOptimalPromptSize, validatePromptSize } = require('./utils');

const config = getConfig();
const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Request logging middleware
if (config.features.enableLogging) {
  app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.path}`);
    next();
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: config.server.env,
  });
});

// LLM Configuration endpoint
app.get('/api/llm/config', (req, res) => {
  res.json({
    contextLimit: config.llm.contextLimit,
    recommendedPromptSize: calculateOptimalPromptSize(
      config.llm.contextLimit,
      config.llm.bufferPercentage
    ),
    bufferPercentage: config.llm.bufferPercentage,
    guidance: 'Keep prompt size between 60-80% of context limit for optimal results',
  });
});

// Prompt validation endpoint
app.post('/api/llm/validate-prompt', (req, res) => {
  const { tokenCount } = req.body;

  if (!tokenCount || typeof tokenCount !== 'number') {
    return res.status(400).json({
      error: 'Invalid request. Expected tokenCount as a number.',
    });
  }

  const validation = validatePromptSize(tokenCount, config.llm.contextLimit);

  res.json({
    ...validation,
    contextLimit: config.llm.contextLimit,
  });
});

// Static file serving for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path,
    message: 'The requested endpoint does not exist',
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: config.features.enableDevTools ? err.message : 'An error occurred',
  });
});

// Start server
const PORT = config.server.port;
const HOST = config.server.host;

const server = app.listen(PORT, HOST, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║           🐙 Potential Octo Server Running 🐙             ║
╠════════════════════════════════════════════════════════════╣
║ Environment: ${config.server.env.padEnd(47)} ║
║ Server:      http://${HOST}:${PORT}${' '.repeat(Math.max(0, 30 - HOST.length - PORT.toString().length))} ║
║ Status:      ✓ Ready to accept connections                ║
╚════════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    process.exit(0);
  });
});

module.exports = app;
