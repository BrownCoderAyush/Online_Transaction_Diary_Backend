const express = require("express");
const router = express.Router();

const {signUp} = require('../../controller/user-controller');


router.post('/signUp', signUp);


module.exports = signUp;