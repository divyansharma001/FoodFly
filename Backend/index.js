
import express from "express";
import loginRouter from "./Routes/login.js";
import cors from 'cors'
import registerRouter from "./Routes/CreateUser.js";
import displayRouter from "./Routes/displayData.js";


const app = express();
const port = 3000;

// app.use((req, res, next) => {

//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// }); 

app.use(cors({origin: '*'}));
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello, World!");
});

app.use('/api/', registerRouter);
app.use('/api/', loginRouter);
app.use('/api/', displayRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
