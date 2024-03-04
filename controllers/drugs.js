const Drug = require("../models/drug.js");
const { HttpError } = require("../helpers/index");
const { ctrlWrapper } = require("../decorators/index.js");

const getAllDrugs = async (req, res) => {
  const { pharmacy } = req.body;
  const result = await Drug.find({ pharmacy });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAllDrugs: ctrlWrapper(getAllDrugs),
};
