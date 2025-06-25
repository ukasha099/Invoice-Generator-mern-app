const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.getServices);
router.post('/', serviceController.addService);
router.delete('/:id', serviceController.deleteService);

module.exports = router;
