const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/image');

// POST new order. Full address will be POST /api/orders
router.post('/', imageCtrl.create)

module.exports = router;