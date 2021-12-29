const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

app.use("/api/v1/auth", require("./routes/api/auth"));
app.use("/api/v1/post", require("./routes/api/post"));
app.use("/api/v1/users", require("./routes/api/users"));
app.use("/api/v1/profile", require("./routes/api/profile"));

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => `Server running on port ${port} 🔥`);
