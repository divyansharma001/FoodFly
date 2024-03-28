import express from "express";
import { Router } from "express";
import { body, validationResult } from "express-validator";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import db from "../db.js"; // Import your database connection
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const loginRouter = Router();
const app = express();
const jwtSecret = process.env.JWT;
var result;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

loginRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please provide a valid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password: loginPassword } = req.body;

      try {
        result = await db.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);

        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.password;

          // Verify the password
          bcrypt.compare(
            loginPassword,
            storedHashedPassword,
            (err, passwordMatch) => {
              if (err) {
                console.error("Error comparing passwords:", err);
                res.status(500).json({ message: "Internal server error" });
              } else {
                if (passwordMatch) {
                  const data = {
                    user: {
                      id: user.id,
                    },
                  };

                  const authToken = jwt.sign(data, jwtSecret);
                  return res.json({ success: true, authToken: authToken });
                } else {
                  res.status(401).json({ message: "Incorrect Password" });
                }
              }
            }
          );
        } else {
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

export default loginRouter;
