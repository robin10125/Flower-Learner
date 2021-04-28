const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/image');

//Upload image route
router.post('/', imageCtrl.upload)

module.exports = router;