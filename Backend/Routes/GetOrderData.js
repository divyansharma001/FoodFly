// Import necessary modules
import express from "express";
import { Router } from "express";
import db from "../db.js"; // This imports a database connection

// Create a router for retrieving user orders
const getOrderRouter = Router();

// Parse incoming JSON request bodies
getOrderRouter.use(express.json());

// Route handler to get all orders of a user by email
getOrderRouter.post("/orders", async (req, res) => {
  try {
    // Extract the user's email from the request body
    const { email } = req.body;

    // Find the user by email
    const userResult = await db.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);

    // Check if user exists
    const user = userResult.rows[0];
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    // Extract the user ID
    const userId = user.id;

    // Get all orders associated with the user ID
    const orders = await db.query("SELECT * FROM user_orders WHERE id = $1", [
      userId,
    ]);

    // Store retrieved orders
    const allOrders = orders.rows;

    // Send successful response with user's orders
    res.status(200).json(allOrders);
  } catch (err) {
    console.error("Error retrieving user orders:", err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Export the getOrder router for use in the main app
export default getOrderRouter;