const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, "./test.mp4"));
});

app.listen(PORT, (error, success) => {
  if (error) {
    console.error(error);
  }
});
