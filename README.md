# E-Shop - MERN Stack E-commerce Platform

A full-featured e-commerce platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, featuring both customer-facing and admin interfaces.

## Features

### Customer Features
- **User Authentication**
  - Login and Registration
  - Password recovery
  - Remember me functionality
  - JWT-based authentication

- **Shopping Experience**
  - Browse products by categories
  - Product search and filtering
  - Shopping cart functionality
  - Secure checkout process
  - Order tracking

- **User Interface**
  - Responsive design
  - Modern and clean UI
  - Category-based navigation
  - Product image galleries
  - Contact and About pages

### Admin Features
- **Dashboard**
  - Sales analytics
  - User statistics
  - Revenue tracking
  - Recent orders overview

- **Product Management**
  - Add/Edit/Delete products
  - Manage product categories
  - Inventory tracking
  - Image upload and management

- **User Management**
  - View all users
  - User roles and permissions
  - Account status management

- **Order Management**
  - Order processing
  - Status updates
  - Order history
  - Customer communication

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- Tailwind CSS for styling
- React Icons
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies for both frontend and backend
```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```


# In the client directory, create a .env file
REACT_APP_API_URL=http://localhost:5000
```

4. Start the development servers
```bash


# Start frontend server (from client directory)
npm start
```


## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/      # Context providers
│   │   ├── layouts/      # Page layouts
│   │   ├── pages/        # Page components
│   │   └── utils/        # Utility functions
│   └── public/           # Static files
│
└── server/                # Backend Node.js application
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── middleware/      # Custom middleware
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

