const express = require('express');
const router = express.Router();
const { createProducer, getProducers } = require('../controllers/producerController');

router.post('/', createProducer);
router.get('/', getProducers);

module.exports = router;
