const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const Users         = require('./users.model');

/**
 * @openapi
 * components:
 *   schemas:
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: atardecer
 *         price:
 *           type: double
 *           example: 45
 *         availableQty:
 *           type: string
 *           example: 2
 *         image:
 *           type: string
 *           example: "https://drive.google.com/file/d/1zqQ3AMnDfPWZ4tkTTe05aL2hgc2J4FOb/view?usp=share_link"
 *     getProduct:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 2
 *         name:
 *           type: string
 *           example: galaxia
 *         image:
 *           type: string
 *           example: "https://drive.google.com/file/d/14XWJwIUGU118hUtbRvZwLYxLRj-8Re9m/view?usp=share_link"
 *         price:
 *           type: double
 *           example: 25
 *         availableQty:
 *           type: integer
 *           example: 13
 *         status:
 *           type: boolean
 *           example: true
 */

const Products = db.define('products', {
  id: {
    primaryKey:    true,
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    allowNull:     false
  },
  name: {
    type:          DataTypes.STRING(150),
    allowNull:     false
  },
  image: {
    type:          DataTypes.STRING,
    allowNull:     false
  },
  price: {
    type:          DataTypes.FLOAT,
    allowNull:     false
  },
  availableQty: {
    type:          DataTypes.INTEGER,
    allowNull:     false,
    field:         'available_qty'
  },
  status: {
    type:          DataTypes.BOOLEAN,
    allowNull:     true
  },
  idUser: {
    type:          DataTypes.INTEGER,
    allowNull:    false,
    field:        'id_user',
    references: {
      model:  Users,
      key:    'id'
    }
  }
});

module.exports = Products;