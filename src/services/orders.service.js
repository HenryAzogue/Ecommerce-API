const { Orders, ProductInOrder, Products } = require('../models');

class OrdersServices {
  static async getAll (idUser){
    try {
      const result = await Orders.findAll({
        where:      {idUser},
        attributes: ['totalPrice', 'status'],
        include:{
          model:      ProductInOrder,
          as:         'productInOrder',
          attributes: ['price', 'quantity'],
          include: {
            model: Products,
            as:    'products',
            attributes: ['name', 'price']
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrdersServices;