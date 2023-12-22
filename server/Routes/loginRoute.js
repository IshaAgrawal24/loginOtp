const express = require("express");
const { testLogin } = require("../Controllers/loginController");

const router = express.Router();
router.route("/getLogin").get(testLogin);

module.exports = router;
