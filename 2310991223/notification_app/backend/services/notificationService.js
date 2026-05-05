import { Log } from '../../../logging_middleware/logger.js';
export async function createNotificationService(message) {
  await Log('backend', 'info', 'service', 'Processing notification');
  return { message, createdAt: new Date().toISOString() };
}
