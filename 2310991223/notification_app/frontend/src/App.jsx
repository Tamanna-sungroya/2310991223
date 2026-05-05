import React, { useState } from 'react';
import { Log } from '../../../logging_middleware/logger.js';
import './App.css';
export default function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendNotification = async () => {
    await Log('frontend', 'info', 'component', 'Button clicked');
    setLoading(true);
    try {
      const res = await fetch('/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Hello from frontend!' }),
      });
      const data = await res.json();
      setResponse(data);
      await Log('frontend', 'info', 'component', 'Notification sent successfully');
    } catch (err) {
      setResponse({ error: err.message });
      await Log('frontend', 'error', 'component', `Notification failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <h1>Notification App</h1>
      <button onClick={sendNotification} disabled={loading}>
        {loading ? 'Sending...' : 'Send Notification'}
      </button>
      {response && (
        <div className="response">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
