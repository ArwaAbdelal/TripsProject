import {Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

const UserModel = sequelize.define('User',
  {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    userName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:DataTypes.INTEGER
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    role:{
        type:DataTypes.ENUM,
        values:['tourist','tour organizer']
    }
  },
  {
    timestamps:true
  },
);

export default UserModel;