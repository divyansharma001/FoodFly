import express from "express";
import { Router } from "express";
import db from "../db.js";

const getOrderRouter = Router();
getOrderRouter.use(express.json());

getOrderRouter.post("/orders", async (req, res) => {
  const { email } = req.body;

  try {
    const userResult = await db.query("SELECT id FROM users WHERE email = $1", [
      email,
    ]);
    const user = userResult.rows[0];

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const userId = user.id;
    const orders = await db.query("SELECT * FROM user_orders WHERE id = $1", [
      userId,
    ]);

    const allOrders = orders.rows;

    // Sending the response

    res.status(200).json(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default getOrderRouter;
