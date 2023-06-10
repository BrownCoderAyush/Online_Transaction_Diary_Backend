const express = require("express");
const router = express.Router();
const { signUp, login } = require('../controller/user-controller');
const isAuthenticated = require("../middleware/authentication_middleware");
;

router.post('/v1/signUp', signUp);
router.post('/v1/login', login);
router.post('/v1/done', isAuthenticated,  (req, res) => {
    try {
        return res.json({
            success: true
        })
    } catch (error) {
        return res.json({
            success: false
        })
    }
})

module.exports = router;

