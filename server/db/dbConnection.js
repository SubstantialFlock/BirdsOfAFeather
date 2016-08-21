import Sequelize from 'sequelize';
require('dotenv').config({silent: true});

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true
  },
  logging: false
});
