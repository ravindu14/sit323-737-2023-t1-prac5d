const jwt = require("jsonwebtoken");
const logger = require("../../logger");
const { JWT_SECRET } = require("../../config");

const createToken = (email) => {
  const dataStoredInToken = {
    email,
  };
  return jwt.sign(dataStoredInToken, JWT_SECRET);
};

const authController = (req, res) => {
  try {
    let values = req.body;

    const email = values.email;
    const password = values.password;

    logger.info(`Login request from  ${email}`);

    const token = createToken(email);

    res.status(200).send({ success: "true", data: token });
  } catch (error) {
    res.status(500).send({ success: "false", Error: error.toString() });
  }
};

module.exports = authController;
