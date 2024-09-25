const express = require ("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
const rootRouter = require("./Routes/index");
const connectDB = require("./config/db");
require("dotenv").config();
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})


