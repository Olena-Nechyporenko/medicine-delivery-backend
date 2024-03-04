const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers/index");

const orderSchema = new Schema(
  {
    userData: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    drugs: [
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        pharmacy: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);
orderSchema.post("save", handleMongooseError);

const Order = model("order", orderSchema);

module.exports = Order;
