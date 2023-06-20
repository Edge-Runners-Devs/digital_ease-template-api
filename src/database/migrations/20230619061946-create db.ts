import { QueryInterface, Transaction } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface) =>
    queryInterface.sequelize.transaction(async (transaction: Transaction) => {
      try {
        await queryInterface.createDatabase('digital-ease', {
          transaction,
        });
      } catch (error) {
        transaction.rollback();
      }
    }),

  down: async (queryInterface: QueryInterface) =>
    queryInterface.sequelize.transaction(async (transaction: Transaction) => {
      queryInterface.dropDatabase('digital-ease');
    }),
};
