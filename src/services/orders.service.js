const Orders = require('../models/orders.model');
const ProductInOrder = require('../models/productInOrder.model');

class OrdersServices {
  static async getAll (idUser){
    try {
      const result = await Orders.findAll({
        where: {idUser}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create (newOrder){
    try {
      const result = await Orders.create(newOrder);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addProductsInOrder (array){
    try {
      array.forEach((item)=> ProductInOrder.create(item));
      return;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrdersServices;