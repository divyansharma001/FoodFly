import express from "express";
import { Router } from "express";
import db from "../db.js";

const displayRouter = Router();

displayRouter.post("/foodData", async (req, res) => {
  try {
    const foodDataResponse = await db.query("SELECT * FROM foodData");
    const foodCategoryResponse = await db.query("SELECT * FROM foodcategory");

    const responseData = [
      foodDataResponse.rows,
      foodCategoryResponse.rows,
    ];

    res.send(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});

export default displayRouter;
