const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello, Cloud-Native DevOps!");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});