'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const today = new Date()
    const arr = [];
    const desc = 'крутой товар #';

    for (let i = 1; i <= 10; i++) {
      arr.push({
        name: desc + i,
        price: (Math.floor(Math.random() * 100) * 100),
        description: 'описание товара ',
        image: '/img/' + i,
        number: Math.floor(Math.random() * 4500) + 500,
        createdAt: new Date(today.getFullYear(), today.getMonth(), i, today.getDate(), today.getMinutes())
      });
    }

    await queryInterface.bulkInsert('Products', arr);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
