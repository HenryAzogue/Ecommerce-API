const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const { getAllUsers,
        getUserById,
        createUser,
        deleteUser
      } = require('../controllers/users.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/users
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       description: Register a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *     201:
 *       description: Created
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
 *                   $ref: "#/components/schemas/users"
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: All users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/users"
 */

router.get('/users', getAllUsers);
router.get('/users/:id', authenticate, getUserById);
router.post('/users', createUser);
router.delete('/users', authenticate, deleteUser);

module.exports = router;