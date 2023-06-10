const express = require("express");
const router = express.Router();
const V1APIRoutes = require('./V1/index.js');


router.use('/v1',V1APIRoutes);

module.exports = V1APIRoutes;

