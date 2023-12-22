const express = require("express");
const cors = require("cors");
const loginRoute = require("./Routes/loginRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", loginRoute);

module.exports = app;
