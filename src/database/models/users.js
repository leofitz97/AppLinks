module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
        name: Sequelize.DataTypes.STRING,
        isBetaMember: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
    }
  };