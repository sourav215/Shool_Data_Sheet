const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SHEET_API = 'https://sheetdb.io/api/v1/do3jx5vi2c0ov';

app.listen(8080, () => {
  try {
    console.log("Server is listening.. on port 8080");
  } catch (error) {
    console.log(error);
  }
});
