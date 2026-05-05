// notification_app/backend/routes/notificationRoutes.js
import express from 'express';
import { createNotification } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/', createNotification);

export default router;
