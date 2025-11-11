import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

export const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  calories: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  readyInMinutes: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
