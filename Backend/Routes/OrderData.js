// Import necessary modules
import express from "express";
import { Router } from "express";
import db from "../db.js"; // This imports a database connection

// Create a router for handling order data
const orderRouter = Router();

// Parse incoming request bodies as JSON
orderRouter.use(express.json());

// Route handler to place an order
orderRouter.post("/orderData", async (req, res) => {
  try {
    // Extract user email, order data, and order date from request body
    const { email, order_data, order_date } = req.body;

    // Find the user by email
    const userResult = await db.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);
    const user = userResult.rows[0];

    // Check if user exists
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const userId = user.id;

    // Loop through each item in the order data and insert them as separate orders
    for (const item of order_data) {
      try {
        // Insert an order for each item
        await db.query(
          "INSERT INTO user_orders (id, item_name, quantity, size, final_price, order_date) VALUES ($1, $2, $3, $4, $5, $6)",
          [userId, item.name, item.qty, item.size, item.finalPrice, order_date]
        );
        console.log("Item inserted successfully:", item);
      } catch (error) {
        console.error("Error inserting item:", error);
        // Consider handling individual item insertion errors more gracefully (e.g., rollback entire transaction)
      }
    }

    // Respond with success message
    res.json({ success: true });
  } catch (err) {
    console.error("Error processing order:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export default orderRouter;