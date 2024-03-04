const express = require("express");
const router = express.Router();
const drugsController = require("../../controllers/drugs");

router.get("/:shopId", drugsController.getDrugsByShopId);

module.exports = router;
