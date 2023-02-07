const OrdersServices = require('../services/orders.service');
const CartsServices = require('../services/carts.service')

const getAllOrders = async (req, res, next)=> {
  try {
    const { id } = req.params;
    const preOrder = await CartsServices.buy(id);
    const newOrder = {
      idUser: preOrder.idUSer,
      totalPrice: preOrder.totalPrice
    };
    const createOrder = await OrdersServices.create(newOrder);
    const idNewOrder =  createOrder.id;

    const productInOrder = await CartsServices.getProducts(id);
    productInOrder.map((item)=> {
    const order = { orderId:   idNewOrder,
                    productId: item.id_product,
                    quantity:  item.quantity,
                    price:     item.price
                    }
    return order;
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

const createOrder = async (req, res, next)=> {
  try {
    const {id} = req.params;
    const order = await OrdersServices.getAll(id);
    res.json(order);
  } catch (error) {
    next(error);
  }
}

module.exports = {getAllOrders, createOrder};