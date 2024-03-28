// Import necessary modules
import express from "express";
import { Router } from "express";
import { body, validationResult } from "express-validator";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import db from "../db.js"; // This imports a database connection

// Create a router for registration logic
const registerRouter = Router();

// Initialize the Express app
const app = express();

// Define the number of salt rounds for password hashing
const saltRounds = 10;

// Parse incoming request bodies as URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Registration route handler with validation and error handling
registerRouter.post(
  "/signUp",
  [
    // Validate name (minimum length of 5 characters)
    body("name")
      .isLength({ min: 5 })
      .withMessage("Name must be at least 5 characters"),

    // Validate email format
    body("email").isEmail().withMessage("Invalid email"),

    // Validate password (minimum length of 6 characters)
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract user data from request body
      const { name, email, password, location } = req.body;

      // Check if email already exists in the database
      const checkResult = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (checkResult.rows.length > 0) {
        return res
          .status(400)
          .json({ error: "Email already exists. Try logging in." });
      }

      // Hash the password securely
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          return res.status(500).send("Internal Server Error");
        }

        try {
          // Insert the user into the database
          const result = await db.query(
            "INSERT INTO users (name, location, email, password) VALUES ($1, $2, $3, $4) RETURNING id",
            [name, location, email, hash]
          );

          const insertedUserId = result.rows[0].id;
          console.log("Inserted User ID:", insertedUserId);

          // Respond with the created user's ID
          res.status(201).json({ id: insertedUserId });
        } catch (error) {
          console.error("Error executing query:", error.stack);
          res.status(500).send("Internal Server Error");
        }
      });
    } catch (error) {
      console.error("Error processing request:", error.stack);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Export the register router for use in the main app
export default registerRouter;
