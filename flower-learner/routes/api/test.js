const express = require('express');
const router = express.Router();
const testCtrl = require('../../controllers/test.js');

//Upload image route
router.post('/', testCtrl.create)

module.exports = router;