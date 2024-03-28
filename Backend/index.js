import express from "express";
import loginRouter from "./Routes/login.js";
import cors from "cors";
import registerRouter from "./Routes/CreateUser.js";
import displayRouter from "./Routes/displayData.js";
import orderRouter from "./Routes/OrderData.js";
import getOrderRouter from "./Routes/GetOrderData.js";

const app = express();
const port = 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Backend Server is running!!");
});

app.use("/api/", registerRouter);
app.use("/api/", loginRouter);
app.use("/api/", displayRouter);
app.use("/api/", orderRouter);
app.use("/api/", getOrderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
