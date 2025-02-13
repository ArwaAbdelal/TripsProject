import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.model.js";

const TripModel=sequelize.define('Trip',{
tripPlace:{
    type:DataTypes.STRING,
    allowNull:false
},
tripDate:{
    type:DataTypes.DATE
},
registerDeadline:{
    type:DataTypes.DATE
},
maxNumberOfSeats:{
    type:DataTypes.INTEGER,
    allowNull:false
},
availableSeats:{
    type:DataTypes.INTEGER,
    defaultValue:0
},
price:{
    type:DataTypes.INTEGER,
    allowNull:false
},
tripPic:{
    type:DataTypes.STRING,
}
},{
    timestamps:true
});

UserModel.hasMany(TripModel);
TripModel.belongsTo(UserModel);

export default TripModel;