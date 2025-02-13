import TripModel from "../../../DB/model/trip.model.js";
import UserModel from "../../../DB/model/user.model.js";
import RegistrationModel from "../../../DB/model/registrations.js";
import { AppError } from "../../utils/AppError.js";

export const joinTrip=async(req,res,next)=>{
const {numberOftourist,tripId}=req.body;
const checkTrip= await TripModel.findByPk(tripId);
if(!checkTrip){
    return next (new AppError("This trip is not exist", 404));
}
if (checkTrip.availableSeats<numberOftourist){
    return next(new AppError("Sorry, there are not enough seats to join", 405))
}
const registration= await RegistrationModel.create({userId:req.id,tripId:checkTrip.id, numberOftourist});
const updateAvailableSeats= await TripModel.update({availableSeats : (checkTrip.availableSeats-numberOftourist)},{
    where:{id:checkTrip.id}
});
return res.status(200).json({message:"Success"});

};