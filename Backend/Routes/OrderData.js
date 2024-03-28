import express from "express";
import { Router } from "express";
import db from "../db.js";

const orderRouter = Router();

orderRouter.use(express.json());

orderRouter.post("/orderData", async (req, res) => {
  try {
    const { email, order_data, order_date } = req.body;

    const userResult = await db.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const userId = user.id;

    // Insert new order
    for (const item of order_data) {
      try {
        await db.query(
          "INSERT INTO user_orders (id, item_name, quantity, size, final_price, order_date) VALUES ($1, $2, $3, $4, $5, $6)",
          [userId, item.name, item.qty, item.size, item.finalPrice, order_date]
        );
        console.log("Item inserted successfully:", item);
      } catch (error) {
        console.error("Error inserting item:", error);
      }
    }

    res.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export default orderRouter;
