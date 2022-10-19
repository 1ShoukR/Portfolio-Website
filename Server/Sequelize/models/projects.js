'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    readmeArticle: DataTypes.STRING,
    techUsed: DataTypes.STRING,
    projectPic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};