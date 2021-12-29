const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
const connectDB = () =>
  mongoose
    .connect(db)
    .then(() => console.log("💻 Mondodb Connected"))
    .catch((err) => console.error(err));

module.exports = connectDB;
