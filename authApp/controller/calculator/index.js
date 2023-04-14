const { default: axios } = require("axios");
const logger = require("../../logger");

const add = (num1, num2) => {
  return num1 + num2;
};

const substract = (num1, num2) => {
  return num1 - num2;
};

const division = (num1, num2) => {
  if (num2 === 0) {
    logger.error("Cannot devide a number by 0");
    throw new Error("Cannot divide number by 0");
  }
  return num1 / num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const calculatorController = async (req, res) => {
  try {
    let values = req.body;

    const number1 = values.number1;
    const number2 = values.number2;
    const operation = values.operation;

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1)) {
      logger.error("Invalid number provided for argument 1");
      throw new Error("Please provide valid number to number 1");
    }
    if (isNaN(num2)) {
      logger.error("Invalid number provided for argument 2");
      throw new Error("Please provide valid number to number 2");
    }
    const operations = ["add", "substract", "multiply", "divide"];
    if (!operations.includes(operation)) {
      logger.error("Invalid operation name provided");
      throw new Error("Please provide valid operation");
    }
    logger.info(
      `Parameters ${num1} and ${num2} received for ${operation} by ${req.user}`
    );

    let result;

    switch (operation) {
      case "add":
        result = add(num1, num2);
        break;
      case "substract":
        result = substract(num1, num2);
        break;
      case "multiply":
        result = multiply(num1, num2);
        break;
      case "divide":
        result = divide(num1, num2);
        break;
      default:
        break;
    }

    const subResult = await axios.get("http://subapp:8081/subApp");

    res
      .status(200)
      .send({ success: "true", data: { result, sub: subResult.data } });
  } catch (error) {
    res.status(500).send({ success: "false", Error: error.toString() });
  }
};

module.exports = calculatorController;
