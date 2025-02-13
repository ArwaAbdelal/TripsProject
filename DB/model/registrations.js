import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import UserModel from "./user.model.js";
import TripModel from "./trip.model.js";

const RegistrationModel=sequelize.define('registration',{
    numberOftourist:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserModel, 
            key: "id"
        }
    },
    tripId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TripModel, 
            key: "id"
        }
    }},
    {
        timestamps:true
    });
    
    UserModel.hasMany(RegistrationModel);
    RegistrationModel.belongsTo(UserModel);

    TripModel.hasMany(RegistrationModel);
    RegistrationModel.belongsTo(TripModel);

    export default RegistrationModel;