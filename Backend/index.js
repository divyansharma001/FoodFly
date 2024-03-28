// Import necessary modules
import express from "express";     // Framework for creating web servers
import loginRouter from "./Routes/login.js";  // Router for handling login functionality
import cors from "cors";          // Middleware for enabling cross-origin requests
import registerRouter from "./Routes/CreateUser.js";  // Router for user registration
import displayRouter from "./Routes/displayData.js";  // Router for displaying data
import orderRouter from "./Routes/OrderData.js";     // Router for handling order placement
import getOrderRouter from "./Routes/GetOrderData.js";  // Router for retrieving order data

// Create an Express application instance
const app = express();
const port = 3000;                // Port on which the server will listen

// Apply middleware
app.use(cors({ origin: "*" }));   // Allow requests from any origin (consider restricting in production)
app.use(express.json());          // Parse incoming requests with JSON bodies

// Route for the root path
app.get("/", async (req, res) => {
  res.send("Backend Server is running!!");
});

// Mount different routers for different API endpoints
app.use("/api/", registerRouter);       // Handle user registration
app.use("/api/", loginRouter);         // Handle user login
app.use("/api/", displayRouter);       // Handle data display
app.use("/api/", orderRouter);         // Handle order placement
app.use("/api/", getOrderRouter);      // Handle order retrieval

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
