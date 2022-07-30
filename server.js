const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
