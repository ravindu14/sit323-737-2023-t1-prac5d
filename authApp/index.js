const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");

const app = express();
app.use(bodyParser());
const port = 8080;

app.use("/", router);

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
