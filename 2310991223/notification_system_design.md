The Notification Application is structured as a modular full stack system:
Frontend (React + Vite): User interface to send notifications and view responses. Uses the reusable logging middleware for frontend logs.
Backend (Node.js + Express): Handles API requests, processes notifications, and uses the logging middleware for backend logs.
Logging Middleware: Shared utility for logging events from both frontend and backend to an external evaluation server.
(Optional) MongoDB: For persistent storage of notifications (not implemented in this minimal version).
Request Flow:
1. User clicks "Send Notification" in the frontend.
2. Frontend logs the button click using the logging middleware.
3. Frontend sends a POST request to /notify API on the backend.
4. Backend logs the incoming request using the logging middleware.
5. Backend controller processes the request, logs actions and errors.
6. Backend service handles business logic, logs processing steps.
7. Backend responds to frontend with the result.
8. Frontend displays the response.
Logging Workflow:
Log() is called in both frontend and backend for all key actions, errors, and events.
The logging middleware sends logs to the external API with the required stack, level, package, and message fields.
Backend uses Express middleware to log every request, response, error, and server start.
Frontend calls Log() for user actions and API calls.
Middleware Explanation:
requestLogger: Express middleware that logs every incoming request and response.
errorLogger: Express middleware that logs all errors globally.
logServerStart: Logs when the server starts.
Reusable Logging Utility: The logger.js file is imported in both backend and frontend, ensuring consistent logging.
This design ensures modularity, reusability, and clean separation of concerns for scalable notification systems.
