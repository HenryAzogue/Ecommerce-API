const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById
} = require('../controllers/products.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/products/new:
 *   post:
 *     summary: Create a new product
 *     tagas: [Products]
 *     requesBody:
 *       description: Created a new product
 *       required : true
 *       content:
 *         application/json:
 *           schema:
 *             $ref:  "#/components/schemas/createProduct"
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
 *                   $ref: "#/components/schemas/creteProduct"
 * /api/v1/product:
 *   get:
 *     summary: Get the products
 *     tags: [Products]
 *     responses:
 *     200:
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
 *                   $ref: "#/components/schemas/getProducts"
 */

router.get('/', getAllProducts);
router.get('/', getProductById);
router.post('/', authenticate, createProduct);
router.delete('/produc', deleteProduct);

module.exports = router;