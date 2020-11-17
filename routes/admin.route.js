const express = require('express');
const router = express.Router();

const { validRegister } = require('../helpers/valid')
const { adminRegisterController } = require('../controllers/admin.controller')

router.post('/admin/new',validRegister, adminRegisterController);

module.exports = router;