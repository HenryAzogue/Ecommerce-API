const { Router }  = require('express');  
const { authenticate } = require('../middlewares');
const getAllOrders = require('../controllers/orders.controller');
const createOrder = require('../controllers/orders.controller');

const router = Router();
/**
 * @openapi
 * /api/v1/orders/getAllOrders/{id}:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *     201:
 *       description: created
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: OK
 *               data:
 *                 type: array
 *                 items:
 *                   $ref: "#/components/schemas/createOrders"
 * /api/v1/orders/{id}:
 *   get:
 *     summary: We get the orders of the user by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *     200:
 *       description: OK
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: OK
 *               data:
 *                 type: array
 *                 items:
 *                   $ref: "#/components/schemas/getAllOrders"
 */

router.get('/orders/:id', authenticate, getAllOrders);
router.post('/orders/:id', authenticate, createOrder);

module.exports = router;