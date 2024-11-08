const express = require('express');
const router = express.Router();
const { processPayment } = require('../controllers/PaymentsController');

// Ruta para procesar el pago
router.post('/process_payment', processPayment);

module.exports = router;
