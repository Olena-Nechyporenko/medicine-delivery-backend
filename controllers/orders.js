const Order = require("../models/order.js");
const { ctrlWrapper } = require("../decorators/index.js");

const addOrder = async (req, res) => {
  const result = await Order.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
