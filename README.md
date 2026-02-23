# Developer Portfolio

A modern, responsive, full-stack developer portfolio website. 
Built using React.js (Vite), Tailwind CSS, Node.js, Express, and MongoDB.

## Features
- **Frontend**: Responsive UI, smooth scrolling navigation, animated sections (Framer Motion).
- **Backend**: Express API for handling contact form submissions with MongoDB.
- **Sections**: Hero, About, Skills, Experience, Projects, Achievements, Contact.
- **Styling**: Tailwind CSS with custom scrollbars and UI enhancements.

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Database (Atlas or local)

### 1. Backend Setup
1. Navigate to the Backend folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the `.env` file with your MongoDB connection string and designated port:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm start
   # or `node server.js`
   ```
   The backend will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Navigate to the Frontend folder (in a new terminal):
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

### Connecting Frontend to Backend
The contact form in `src/components/Contact.jsx` is configured to send POST requests to `http://localhost:5000/api/contact`. Make sure the backend server is running when testing the contact form.

## Deployment Notes
- **Frontend**: Compatible with Vercel, Netlify, or any static hosting service. Ensure build command is `npm run build` and publish directory is `dist`.
- **Backend**: Can be deployed on Render, Heroku, or similar Node.js hosting. Set the necessary environment variables (`PORT`, `MONGODB_URI`) on the hosting platform. Database IP whitelisting may be required for MongoDB Atlas.
