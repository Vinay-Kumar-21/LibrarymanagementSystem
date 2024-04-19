const express = require('express');
const cors = require("cors");
const app = express();


require("dotenv").config();
require("./config/databaseconfig");

const userRoute=require("./routes/userRoute");
const bookRoute=require("./routes/bookRoute");


app.use(cors());
app.use(express.json());
app.use("/api/book",bookRoute);
app.use("/api/user",userRoute);

app.listen(8083, () => {
    console.log('Server is running on http://localhost:8083');
  });