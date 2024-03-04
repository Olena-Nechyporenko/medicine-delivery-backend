const express = require("express");
const router = express.Router();
const drugsController = require("../../controllers/drugs");

router.get("/", drugsController.getAllDrugs);

module.exports = router;
