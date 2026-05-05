import { Log } from './logger.js';
export function requestLogger(req, res, next) {
  Log('backend', 'info', 'middleware', `Incoming ${req.method} ${req.url}`);
  res.on('finish', () => {
    Log('backend', 'info', 'middleware', `Response ${req.method} ${req.url} - ${res.statusCode}`);
  });
  next();
}
export function errorLogger(err, req, res, next) {
  Log('backend', 'error', 'middleware', `Error on ${req.method} ${req.url}: ${err.message}`);
  next(err);
}
export function logServerStart(port) {
  Log('backend', 'info', 'middleware', `Server started on port ${port}`);
}
