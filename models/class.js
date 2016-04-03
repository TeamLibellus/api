var Sequelize = require('sequelize');

var db = require('../database/sequelize');
var Subject = require('./subject');
var Teacher = require('./teacher');
var Term = require('./term');
var User = db.define('user');

var Class = db.define('class', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slot: {
    type: Sequelize.STRING,
    allowNull: false
  },
  room: {
    type: Sequelize.STRING
  },
  section: {
    type: Sequelize.STRING
  },
  time: {
    type: Sequelize.JSON
  },
  description: {
    type: Sequelize.TEXT
  },
  enrollment: {
    type: Sequelize.INTEGER
  },
  capacity: {
    type: Sequelize.INTEGER
  },
  detailsUpdatedAt: {
    type: Sequelize.DATE
  }
});

Class.belongsTo(Subject);
Class.belongsTo(Term);
Class.belongsTo(Teacher);
Class.belongsToMany(User, {
  through: 'user_class',
  foreignKey: 'class_id',
  otherKey: 'user_id'
});

module.exports = Class;