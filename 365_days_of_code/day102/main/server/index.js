//index.js (NEW)
const express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors");

const server = express();

const home = require("./routes/home");
const user = require("./routes/user");

server.use(cors())
server.use(express.json());

server.use("/", home);
server.use("/user", user);

mongoose.connect(
  "mongodb://localhost:27017/homework-febuary",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log(`Connected to Database`);
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
