const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("MongoDB temporarily skipped");

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/submit", (req, res) => {

  console.log(req.body);

  res.json({
    message: "Form Submitted Successfully"
  });

});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});