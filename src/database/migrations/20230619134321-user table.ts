import { QueryInterface, Transaction } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.sequelize.transaction(async (transaction: Transaction) => {
      try {
      } catch (error) {
        transaction.rollback();
      }
    }),

  down: async (queryInterface: QueryInterface) =>
    queryInterface.sequelize.transaction(
      async (transaction: Transaction) => {},
    ),
};
