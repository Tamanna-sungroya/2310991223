dotenv.config();
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { requestLogger, errorLogger, logServerStart } from '../../logging_middleware/middleware.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Notification API running' });
});

app.use('/notify', notificationRoutes);

app.use(errorLogger);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  logServerStart(PORT);
  console.log(`Server running on port ${PORT}`);
});