// Import necessary modules
import express from "express";
import { Router } from "express";
import db from "../db.js"; // This imports a database connection

// Create a router for data display functionality
const displayRouter = Router();

// Route handler to retrieve food data and categories
displayRouter.post("/foodData", async (req, res) => {
  try {
    // Fetch food data from the database
    const foodDataResponse = await db.query("SELECT * FROM foodData");

    // Fetch food categories from the database
    const foodCategoryResponse = await db.query("SELECT * FROM foodcategory");

    // Combine the retrieved data into a response object
    const responseData = [
      foodDataResponse.rows, // Food data array
      foodCategoryResponse.rows, // Food category array
    ];

    // Send the combined response data
    res.send(responseData);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Error occurred while fetching data"); // More specific error message
  }
});

// Export the display router for use in the main app
export default displayRouter;
