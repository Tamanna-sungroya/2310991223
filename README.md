# Notification Application with Logging Middleware

## Overview

This project is a **Full Stack Notification Application** developed as part of a campus hiring evaluation.
The main objective is to demonstrate **clean architecture**, **middleware design**, and **centralized logging**.

The application allows users to send notifications while automatically logging system activities using a reusable logging middleware.

---

## Tech Stack

### Frontend

* React (Vite)
* Vanilla CSS
* Axios

### Backend

* Node.js
* Express.js
* REST APIs

### Logging System

* Custom Logging Middleware
* External Log Server API Integration

---

## Project Structure

```
RollNumber/
│
├── logging_middleware/
│   ├── logger.js
│   └── middleware.js
│
├── notification_app/
│   ├── backend/
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── services/
│   │
│   └── frontend/
│       └── React App
│
└── notification_system_design.md
```

---

## Features

* Full Stack Notification System
* Centralized Logging Middleware
* API Request Logging
* Error Tracking
* Modular Architecture
* Reusable Logger Utility

---

## Logging Middleware

A reusable logging function is implemented:

```
Log(stack, level, package, message)
```

### Logged Events

* Server startup
* API requests
* Controller execution
* Errors & exceptions
* User actions

Logs are sent to the external evaluation logging API.

---

## API Endpoints

### Health Check

```
GET /
```

### Send Notification

```
POST /notify
```

Response:

```
{
  "message": "Notification Sent"
}
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone <repo-url>
cd RollNumber
```

---

### 2. Backend Setup

```
cd notification_app/backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd notification_app/frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Environment Variables

Create `.env` file:

```
ACCESS_TOKEN=your_access_token
```

---

## System Workflow

1. User clicks **Send Notification**
2. Frontend calls backend API
3. Logging middleware captures request
4. Controller processes notification
5. Logs are sent to logging server
6. Response returned to UI

---

## Design Principles

* Separation of Concerns
* Middleware-Based Architecture
* Reusable Utilities
* Clean Folder Structure
* Scalable Design

---

## Future Improvements

* Database persistence
* Authentication system
* Notification history dashboard
* Real-time updates

---

## Author

Campus Hiring Evaluation Submission
