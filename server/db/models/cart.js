'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    id: {primaryKey: true, type: [DataTypes.INTEGER], allowNull: true},
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};