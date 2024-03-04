const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");

const drugSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    pharmacy: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
drugSchema.post("save", handleMongooseError);

const Drug = model("drug", drugSchema);

module.exports = Drug;
