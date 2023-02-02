const OrdersServices = require('../services/orders.service');
const { Users, ProductInOrder, Products } = require('../models');

const getAllOrders = async (req, res, next)=> {
  try {
    const order = await OrdersServices.getAll();
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

const createOrder = async (req, res, next)=> {
  try {
    
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllOrders, createOrder };