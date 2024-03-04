const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/orders");

const { isEmptyBody } = require("../../middlewares/index");
const { validateBody } = require("../../decorators/index");

const { orderSchema } = require("../../schemas/order-schemas");

router.post(
  "/",
  isEmptyBody,
  validateBody(orderSchema),
  ordersController.addOrder
);

module.exports = router;
