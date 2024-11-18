const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const pool = require("./config/db");

import { Application } from "express";

const app: Application = express();
app.use(bodyParser.json());

pool.connect((err: Error, client: any, release: any) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    process.exit(1);
  } else {
    console.log("Connected to the PostgreSQL database.");
    release();
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
