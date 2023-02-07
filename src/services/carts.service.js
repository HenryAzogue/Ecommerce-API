const ProductInCar = require('../models/productInCart.model');
const Products = require('../models/products.model');
const Carts = require('../models/carts.model');

class CartsServices {
  static async getByUserId(idUser){
    try {
      const result = await Carts.findOne({
        where: { idUser},
        attributes: ['totalPrice'],
        include: {
          model: ProductInCar,
          as: 'product_cart',
          attributes: ['quantity', 'price'],
          include: {
            model: Products,
            as: 'product',
            attributes: [ 'id','name', 'price']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addToCart (data) {
    try {
      const addPruct = await Carts.findByPk(data.cartId, {attributes: ['totalPrice']});
      const cartPrice = addPruct.totalPrice;
      const newPrice = parseFloat(cartPrice) + parseFloat(data.price);
      await Carts.update({totalPrice: newPrice}, {where: {id: data.cartId}});
      const result = await ProductInCar.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
;}

module.exports = CartsServices;