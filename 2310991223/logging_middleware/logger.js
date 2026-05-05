// logging_middleware/logger.js
// Reusable logger utility for both backend and frontend
import fetch from 'node-fetch';

const LOG_API_URL = 'http://20.207.122.28/evaluation-service/logs';
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || (typeof window !== 'undefined' && window.ACCESS_TOKEN);

/**
 * Log to external server
 * @param {string} stack - backend | frontend
 * @param {string} level - debug | info | warn | error | fatal
 * @param {string} pkg - package name
 * @param {string} message - log message
 */
export async function Log(stack, level, pkg, message) {
  if (!ACCESS_TOKEN) {
    console.error('ACCESS_TOKEN not set in environment variables');
    return;
  }
  const payload = {
    stack,
    level,
    package: pkg,
    message,
    timestamp: new Date().toISOString(),
  };
  try {
    await fetch(LOG_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Fallback: log locally if failed
    console.error('Failed to send log:', err, payload);
  }
}
