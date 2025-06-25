const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getClients);
router.post('/', clientController.addClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;
