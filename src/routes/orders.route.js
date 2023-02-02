const { Router } = require('express');
const { authenticate } = require('../middlewares/auth.middleware');
const { getAllOrders, createOrder } = require('../controllers/orders.controller');

const router = Router();

router.get('/orders', authenticate, getAllOrders);
router.post('/orders', authenticate, createOrder);

module.exports = router;