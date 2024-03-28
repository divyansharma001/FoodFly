// Import necessary modules
import express from "express";
import { Router } from "express";
import { body, validationResult } from "express-validator";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import db from "../db.js"; // This imports a database connection
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables from .env file (assuming it's in the parent directory)
dotenv.config({ path: "../../.env" });

// Create a router for login functionality
const loginRouter = Router();
const app = express(); // Likely not used in this router, can be removed

// Retrieve the JWT secret from the environment
const jwtSecret = process.env.JWT;

// Parse incoming request bodies as URL-encoded data (consider using JSON instead)
app.use(bodyParser.urlencoded({ extended: true })); // Might be better suited for registerRouter

// Serve static files from the "public" directory (likely not used here)
app.use(express.static("public")); // Might be better suited for a separate route

// Login route handler with validation and error handling
loginRouter.post(
  "/login",
  [
    // Validate email format
    body("email").isEmail().withMessage("Please provide a valid email address"),

    // Validate password is not empty
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Extract email and password from request body
      const { email, password: loginPassword } = req.body;

      try {
        // Find user by email in the database
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);

        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.password;

          // Verify the password using bcrypt
          bcrypt.compare(loginPassword, storedHashedPassword, (err, passwordMatch) => {
            if (err) {
              console.error("Error comparing passwords:", err);
              return res.status(500).json({ message: "Internal server error" });
            } else {
              if (passwordMatch) {
                // User credentials are valid, create and send JWT token
                const data = {
                  user: {
                    id: user.id,
                  },
                };
                const authToken = jwt.sign(data, jwtSecret);
                return res.json({ success: true, authToken: authToken });
              } else {
                // Incorrect password
                res.status(401).json({ message: "Incorrect Password" });
              }
            }
          });
        } else {
          // User not found
          res.status(404).json({ message: "User not found" });
        }
      } catch (err) {
        console.error("Error executing query:", err);
        res.status(500).json({ message: "Internal server error" });
      }
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Export the login router for use in the main app
export default loginRouter;