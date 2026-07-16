# QueueLess – Smart Queue Management System

QueueLess is a smart digital queue management application that allows users to join queues remotely, receive digital tokens, track queue progress, and view estimated waiting times.

The goal of QueueLess is to reduce physical waiting lines in hospitals, banks, colleges, government offices, and other public service organizations.

## Features

- User registration and login
- Browse available organizations
- Search organizations
- Join a queue digitally
- Generate organization-based tokens
- Display the number of people ahead
- Calculate estimated waiting time
- Track queue progress
- Dynamic queue status
- Responsive user interface
- Real-time queue updates using Socket.IO

## Supported Organizations

- Hospitals
- Banks
- Colleges
- Government offices

## Technology Stack

### Frontend

- React.js
- Vite
- React Router
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcrypt.js
- Socket.IO

### Database

- MongoDB Atlas

## Project Structure

```text
QueueLess/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md