'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert(
    'UserAccountInfos',
    [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Guest',
        lastName: "Guest",
        username: "guest",
        password: "guest",
        email: "guest@guest.com"
      },
    ],
    {}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserAccountInfos', null, {});
  }
};
