# RealEstate3D Management System

## Project Overview
RealEstate3D is a modern, high-performance property management dashboard built to empower real estate agencies. It provides a sleek, glassmorphism-themed interface for managing properties, agents, and customers. The application is designed as a Single Page Application (SPA) offering an intuitive user experience with seamless navigation, built-in analytics, and property CRUD capabilities.

## Features
- **Premium Dashboard UI:** Dark mode glassmorphism design with `framer-motion` micro-interactions.
- **Property Management:** View, filter, and manage property listings efficiently.
- **Authentication Flow:** Built-in dummy authentication with protected routing and localStorage session persistence.
- **Analytics & Summary Cards:** Quick insights into occupancy rates, pipeline value, and total revenue.
- **Responsive Design:** Fully responsive layout optimized for Desktop, Tablet, and Mobile views.
- **API-Ready Architecture:** A centralized service layer ready to connect to a real backend database.

## Tech Stack
- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with arbitrary value support and complex gradients)
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation & Running Locally
1. **Clone or Download the Repository:**
   Navigate into the project directory.
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

### Building for Production
To create an optimized production build:
```bash
npm run build
```
The compiled files will be generated inside the `dist/` folder, ready for deployment to Vercel, Netlify, or any static hosting provider.

## Folder Structure
```text
RealEstate3D/
├── public/                 # Static public assets (e.g., _redirects for Netlify)
├── src/
│   ├── assets/             # Images, SVGs, and other local assets
│   ├── components/         # Reusable UI elements (Cards, Forms, Sidebar, Topbar)
│   ├── contexts/           # React Context providers (e.g., AuthContext)
│   ├── database/           # Local dummy database/schemas (Phase 1-3)
│   ├── layouts/            # Page layouts (e.g., DefaultLayout with Sidebar)
│   ├── pages/              # Main routing views (Dashboard, Login, Properties, etc.)
│   ├── services/           # API integration layer (api.js)
│   ├── App.jsx             # Main App component & Router definitions
│   ├── index.css           # Global Tailwind and custom CSS rules
│   └── main.jsx            # Application entry point
├── .env                    # Environment configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Project dependencies and scripts
```

## Key Components
- **`AuthContext.jsx`**: Manages the global authentication state. Handles login, logout, and stores the session securely in `localStorage`.
- **`ProtectedRoute.jsx`**: A wrapper component that checks the user's authentication status. Unauthenticated users are safely redirected to the Login screen.
- **`Dashboard.jsx`**: The command center. Renders `SummaryCards` and `PanelCard` to display key real estate analytics.
- **`Properties.jsx`**: The main interface for the property module. Uses the `apiService` to fetch property records and maps them into `PropertyCard` UI elements.
- **`api.js`**: The centralized service layer. Currently mocks backend responses but is structured to easily drop-in real `fetch` or `axios` calls later.

## Basic Usage Guide
1. **Logging In:** Upon visiting the app, you will be prompted to log in. Use any email and password combination to test the dummy authentication.
2. **Dashboard Overview:** After logging in, you will land on the Dashboard. Here you can see quick statistics such as Total Revenue and Occupancy Rates.
3. **Managing Properties:** Navigate to the "Properties" tab via the sidebar. Here you can view the mock portfolio of properties. Each property displays its status (Available, Sold, Rented) and key specs (price, beds, baths, sqft).
4. **Logging Out:** Click the Logout button in the navigation bar or sidebar to clear your session and return to the secure login screen.

## Future Improvements
- **Backend Integration:** Replace the mock responses in `src/services/api.js` with actual backend endpoints (Node/Express, Django, etc.).
- **Real Database:** Transition from dummy arrays to a real database (PostgreSQL/MongoDB) for persistent property and user data.
- **Advanced Filtering:** Expand the properties page to allow users to dynamically filter by price ranges, locations, and property status.
- **User Roles:** Implement role-based access control (RBAC) to differentiate between Admin, Agent, and Customer views.
