import express from 'express';
import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import db from '../db.js';


const registerRouter = Router();
const app = express();
const saltRounds = 10;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

registerRouter.post(
  '/signUp',
  [
    body('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password, location } = req.body;

      // Check if email already exists
      const checkResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);

      if (checkResult.rows.length > 0) {
        return res.status(400).json({ error: 'Email already exists. Try logging in.' });
      }

      // Hash the password and save it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).send('Internal Server Error');
        }

        try {
          // Perform the INSERT operation
          const result = await db.query('INSERT INTO users (name, location, email, password) VALUES ($1, $2, $3, $4) RETURNING id', [
            name,
            location,
            email,
            hash,
          ]);

          const insertedUserId = result.rows[0].id;
          console.log('Inserted User ID:', insertedUserId);

          res.status(201).json({ id: insertedUserId });
        } catch (error) {
          console.error('Error executing query:', error.stack);
          res.status(500).send('Internal Server Error');
        }
      });

      

    } catch (error) {
      console.error('Error processing request:', error.stack);
      res.status(500).send('Internal Server Error');
    }
  }
);

export default registerRouter;
