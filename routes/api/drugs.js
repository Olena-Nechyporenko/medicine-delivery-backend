const express = require("express");
const router = express.Router();

const drugsController = require("../../controllers/drug");

router.get("/", drugsController.getAllDrugs);

module.exports = router;
