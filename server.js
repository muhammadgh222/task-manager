const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfuly!");
  });

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
