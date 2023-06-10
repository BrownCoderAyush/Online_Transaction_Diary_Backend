const express = require("express");
const router = express.Router();
const {signUp, login} = require('../controller/user-controller');;

router.post('/v1/signUp',signUp);
router.post('/v1/login',login);


module.exports = router;

