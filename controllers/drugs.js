const Drug = require("../models/drug.js");
const { HttpError } = require("../helpers/index");
const { ctrlWrapper } = require("../decorators/index.js");

const getDrugsByShopId = async (req, res) => {
  const { shopId } = req.params;
  const result = await Drug.find({ shopId });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getDrugsByShopId: ctrlWrapper(getDrugsByShopId),
};
