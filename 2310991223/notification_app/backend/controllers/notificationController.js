// notification_app/backend/controllers/notificationController.js
import { createNotificationService } from '../services/notificationService.js';
import { Log } from '../../../logging_middleware/logger.js';

export async function createNotification(req, res, next) {
  try {
    await Log('backend', 'info', 'controller', 'Received notification request');
    const { message } = req.body;
    if (!message) {
      await Log('backend', 'warn', 'controller', 'No message provided');
      return res.status(400).json({ error: 'Message is required' });
    }
    const result = await createNotificationService(message);
    await Log('backend', 'info', 'controller', 'Notification created successfully');
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    await Log('backend', 'error', 'controller', `Error: ${err.message}`);
    next(err);
  }
}
