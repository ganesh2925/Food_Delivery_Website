# Food Delivery Website
## Overview:-
This project is a full-stack food delivery web application that allows users to browse various restaurants, view menus, place orders, and track deliveries. It is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js.

## Features
**User Authentication:** Users can sign up, log in, and manage their accounts.
**Restaurant Listings:** View a variety of restaurants along with their menus.
**Order Management:** Users can place, view, and track their orders.
**Search Functionality:** Search for restaurants and dishes based on location, cuisine, or popularity.
**Responsive Design:** Optimized for both desktop and mobile views.

## Technologies Used
**MongoDB:** NoSQL database for storing user information, restaurant details, orders, etc.
**Express.js:** Backend framework to handle API requests and server-side operations.
**React.js:** Frontend library to build the user interface and enhance user experience.
**Node.js:** Server environment for running the backend logic.
**Mongoose:** ODM (Object Data Modeling) library for MongoDB to manage database models.
**JWT Authentication:** Used for secure user authentication and session management.
**Redux:** State management for managing cart, user data, and orders.

## How to Run
#### Backend Setup (Node.js + Express)
**Clone this repository:**
`git clone https://github.com/your-username/food-delivery-app.git `<br>
**Navigate to the backend directory:**
`cd food-delivery-app/backend`<br>
**Install the dependencies:**
`npm install`
#### Create a .env file in the backend directory and add the following variables:

`MONGO_URI=your-mongodb-uri`<br>
`JWT_SECRET=your-jwt-secret`<br>

**Start the backend server:**
`node server.js`

## Frontend Setup (React)

**Navigate to the frontend directory:**
`cd ../frontend`

**Install the dependencies:**
`npm install`

**Start the frontend development server:**
`npm run dev`

**Open your browser and navigate to `http://localhost:3000` to access the website.**

## Project Structure

`food-delivery/`<br>
`├── backend/            # Backend files (Node.js, Express)`<br>
`│   ├── models/         # Mongoose models for MongoDB`<br>
`│   ├── routes/         # API routes for user, orders, and restaurant operations`<br>
`│   ├── controllers/    # Request handlers and business logic`<br>
`│   └── server.js       # Main entry point for backend server`<br>
`│`<br>
`├── frontend/           # Frontend files (React)`<br>
`│   ├── public/         # Static assets and public resources`<br>
`│   ├── src/            # React components, Redux store, and utilities`<br>
`│   └── index.js        # Main entry point for frontend`<br>
`│`<br>
`└── .env                # Environment variables for database and JWT`<br>

## Screenshots

## Future Improvements
Add real-time order tracking with WebSockets.
Integration with third-party payment gateways (Stripe, PayPal).
Reviews and ratings for restaurants and dishes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
