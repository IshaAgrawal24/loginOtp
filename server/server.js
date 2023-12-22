const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log("Server has started!");
});
