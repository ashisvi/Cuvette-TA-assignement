# Student Job Tracker

## Overview
The Student Job Tracker is a web application designed to help students manage their job applications efficiently. It allows users to add, view, update, and delete job applications, providing a clear overview of their job search progress.

## Tech Stack
- **Frontend:** React (with Hooks)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas preferred)
- **Deployment:** Vercel (Frontend), Render or Railway (Backend)

## Features
1. **Add Job Application**
   - Users can add job applications with the following fields:
     - Company
     - Role
     - Status (Applied / Interview / Offer / Rejected)
     - Date of Application
     - Link

2. **List All Applications**
   - Displays all job applications in a clean, responsive layout.
   - Includes filtering options by status or date.

3. **Update Status**
   - Users can update the status of their job applications.

4. **Delete Application**
   - Users can delete job entries they no longer wish to track.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB Atlas account for database hosting.

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your MongoDB connection string.
4. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `frontend` directory and add your API endpoint.
4. Start the frontend application:
   ```
   npm start
   ```

## Deployment
- The frontend is deployed on Vercel.
- The backend is deployed on Render or Railway.
- The database is hosted on MongoDB Atlas.

## License
This project is licensed under the MIT License.