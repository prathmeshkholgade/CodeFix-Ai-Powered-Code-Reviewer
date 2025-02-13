const express = require("express");

const { getAiResponse } = require("../controller/aiController");
const routet = express.Router();

routet.post("/get-review", getAiResponse);
module.exports = routet;
