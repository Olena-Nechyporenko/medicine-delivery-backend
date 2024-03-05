const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers/index");

const isValidId = (req, res, next) => {
  const { drugId } = req.params;
  if (!isValidObjectId(drugId)) {
    next(HttpError(400, `${drugId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
