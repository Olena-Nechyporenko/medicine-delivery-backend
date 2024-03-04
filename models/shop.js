const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");

const shopSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
shopSchema.post("save", handleMongooseError);

const Shop = model("shop", shopSchema);

module.exports = Shop;
