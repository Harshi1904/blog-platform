const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
console.log("JWT_SECRET =", process.env.JWT_SECRET);
const app = express();

app.use(express.json());
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const postRoutes = require("./routes/posts");
app.use("/api/posts", postRoutes);
const commentRoutes = require("./routes/comments");
app.use("/api/comments", commentRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Blog Platform Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});