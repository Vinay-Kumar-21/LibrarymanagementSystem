const express = require('express');
const cors = require("cors");
const app = express();


require("dotenv").config();
require("./config/databaseconfig");


app.use(cors());
app.use(express.json());

app.listen(8083, () => {
    console.log('Server is running on http://localhost:8083');
  });