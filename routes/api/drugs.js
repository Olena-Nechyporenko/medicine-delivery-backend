const express = require("express");
const router = express.Router();
const drugsController = require("../../controllers/drugs");

const { isValidId } = require("../../middlewares/index");

router.get("/:shopId", drugsController.getDrugsByShopId);
router.get("/searchById/:drugId", isValidId, drugsController.getDrugById);

module.exports = router;
