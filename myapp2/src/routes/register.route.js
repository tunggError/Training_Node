var express = require('express')
var router = express.Router();
const { registerAuth } = require('../controller');
const validateRegister = require('../middlewares/validateRegister');
const registerVali = require('../validations/registerVali');
router.post('/', validateRegister(registerVali), registerAuth.register);

module.exports = router;