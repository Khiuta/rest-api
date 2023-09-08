const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Gustavo Fernandes',
        email: 'gustavo@gmail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Paula',
        email: 'paula@gmail.com',
        password_hash: await bcrypt.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        email: 'maria@gmail.com',
        password_hash: await bcrypt.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {

    },
  ),

  down: () => {},
};
