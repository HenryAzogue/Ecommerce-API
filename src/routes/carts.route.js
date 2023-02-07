const { Router } = require('express');
const { authenticate } = require('../middlewares');
const { getCartByUser, addProductToCart } = require('../controllers/carts.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/carts/add:
 *   post:
 *     summary: Add products in the cart
 *     tags: [Carts]
 *     requestBody:
 *       description: Add a product in you cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addProduct"
 *     responses:
 *       201:
 *         description: Add
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: string
 *                   items:
 *                     $ref: "#/components/schemas/addProduct"
 * /api/v1/carts/{id}:
 *   get:
 *     summary: Get all products in the cart
 *       tags: [Carts]
 *       parameters:
 *         - in: path
 *           name: id
 *       responses:
 *         200:
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   status:
 *                     type: string
 *                     example: OK
 *                   data:
 *                     type: array
 *                     items:
 *                       $ref: "#/components/schemas/getCartByUSer"
 */

router.get('/cart/:id', authenticate, getCartByUser);
router.post('/cart/add', authenticate, addProductToCart);

module.exports = router;