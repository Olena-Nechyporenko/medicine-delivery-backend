const Shop = require("../models/shop.js");
const { HttpError } = require("../helpers/index");
const { ctrlWrapper } = require("../decorators/index.js");

const getAllShops = async (req, res) => {
  const result = await Shop.find();
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
};
