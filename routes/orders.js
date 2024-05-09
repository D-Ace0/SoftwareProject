const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart } = require('../controllers/orders.js');
const authenticateToken = require('../middleware/authentication_Handler.js');

// Add order (for customers only)
router.post('/', authenticateToken, addToCart);  //

// Delete order (for customers only)
router.delete('/', authenticateToken, removeFromCart);

module.exports = router;

