import {sequelize} from '../dbConnection';
import {Users} from './userModel';
import {Concerns} from './concernModel';
import Sequelize from 'sequelize';

// Join model
const User_Concerns = sequelize.define ('User_Concerns', {
  userId: Sequelize.INTEGER,
  concernId: Sequelize.INTEGER
});

// Create foreign key constraints within join table
Users.hasMany(Concerns);
Concerns.belongsToMany(Users, { through: User_Concerns});

export default User_Concerns;
