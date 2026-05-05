// notification_app/backend/services/notificationService.js
import { Log } from '../../../logging_middleware/logger.js';

// Simulate DB save (can be replaced with MongoDB logic)
export async function createNotificationService(message) {
  await Log('backend', 'info', 'service', 'Processing notification');
  // Simulate DB save
  // If using MongoDB, insert logic here
  return { message, createdAt: new Date().toISOString() };
}
