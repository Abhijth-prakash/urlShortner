
import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Server is running fine");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
