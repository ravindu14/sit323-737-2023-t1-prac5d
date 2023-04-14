const express = require("express");
const winston = require("winston");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
const port = 8081;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "calculator service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "info.log" }),
  ],
});

app.get("/", (req, res) => {
  try {
    res.status(200).send("hello from subapp");
  } catch (error) {
    res.status(500).send({ success: "false", Error: error.toString() });
  }
});

app.get("/subApp", (req, res) => {
  try {
    res
      .status(200)
      .send({ success: "true", data: { message: "sub app called" } });
  } catch (error) {
    res.status(500).send({ success: "false", Error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
