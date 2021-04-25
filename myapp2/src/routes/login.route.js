var express = require('express');
var router = express.Router();
const { loginAuth } = require('../controller');
const validateLogin = require('../middlewares/validateLogin');
const loginVali = require('../validations/loginVali')

router.post('/', validateLogin(loginVali), loginAuth.login)

module.exports = router;