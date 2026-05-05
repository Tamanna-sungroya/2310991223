const LOG_API_URL = 'http://20.207.122.28/evaluation-service/logs';
export async function Log(stack, level, pkg, message) {
  let ACCESS_TOKEN;
  if (typeof window === 'undefined') {
    ACCESS_TOKEN = process.env.ACCESS_TOKEN;
    const fetch = (await import('node-fetch')).default;
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
      console.error('Failed to send log:', err, payload);
    }
  } else {
    ACCESS_TOKEN = window.ACCESS_TOKEN;
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
      console.error('Failed to send log:', err, payload);
    }
  }
}
