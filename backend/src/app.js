const express = require("express");
const app = express();
const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ai", aiRoutes);
app.get("/", (req, res) => {
  res.send("hello");
});

app.use((err, req, res, next) => {
  const { message = "something went wrong", status = 500 } = err;
  res.status(status).json(message);
});
module.exports = app;
