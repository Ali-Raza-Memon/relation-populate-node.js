const express = require('express');
const router = new express.Router;
const Staff = require('../controllers/StaffController');
const Right = require('../controllers/RightController');

router.post('/staff/create',Staff.create);

router.post('/staff/create',Right.create);

module.exports = router;