const { ProductInCar, Products, Cars}= require('../models');

class CartsServices {
  static async getByUserId(idUser){
    try {
      const result = await Cars.findOne({
        where: { idUser},
        attributes: ['totalPrice'],
        include: {
          model: ProductInCar,
          as: 'productInCar',
          attributes: ['quantity', 'price'],
          include: {
            model: Products,
            as: 'products',
            attributes: [ 'id','name', 'price']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addToCart (productInCar) {
    try {
      const addedPruct = await ProductInCar.create(productInCar);
      return addedPruct;
    } catch (error) {
      throw error;
    }
  }
;}

module.exports = CartsServices;