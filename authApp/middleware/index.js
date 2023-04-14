const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const logger = require("../logger");

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET).email;
};

const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers;

    if (header && header.authorization) {
      const authToken = header.authorization;

      const email = verifyToken(authToken);

      if (email) {
        req.user = email;
        next();
      } else {
        throw Error("Unauthorized User");
      }
    } else {
      throw Error("Unauthorized User");
    }
  } catch (error) {
    logger.error(error.toString());
    res.status(401).send({ success: false, message: error.toString() });
  }
};

module.exports = authMiddleware;
