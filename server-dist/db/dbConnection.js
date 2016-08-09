'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = exports.sequelize = new _sequelize2.default(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
});