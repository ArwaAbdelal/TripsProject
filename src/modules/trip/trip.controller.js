import TripModel from '../../../DB/model/trip.model.js';
import UserModel from '../../../DB/model/user.model.js';
import RegistrationModel from '../../../DB/model/registrations.js'
import cloudinary from '../../utils/cloudinary.js';
import { Op } from 'sequelize';

export const createTrips=async(req,res,next)=>{
    const {tripPlace,tripDate,registerDeadline,maxNumberOfSeats,price} = req.body;
    const addTrip=await TripModel.create({tripPlace,tripDate,registerDeadline,maxNumberOfSeats,availableSeats:maxNumberOfSeats,price,UserId: req.id});
    return res.status(201).json ({message:"Success",addTrip});
};

export const uploadTripPlacePic=async(req,res,next)=>{
    const { id } = req.params; //this is id for trip
    const trip = await TripModel.findByPk(id);
    if(trip == null){
    return next(new AppError("This trip is not exist",404));
    }
    const {secure_url} = await cloudinary.uploader.upload(req.file.path)
    trip.tripPic=secure_url;
    await trip.save();
    return res.status(200).json({message:"success"});
}


export const getOrganizerTrips=async(req,res,next)=>{
    const getTrips= await TripModel.findAll({
        include:{
            model:UserModel,
            attributes:['id','userName']
        },
        where:{UserId:req.id}
    });
    return res.status(200).json({message:"Success",getTrips});
};

export const getContinuousTrips=async(req,res,next)=>{
    const dateNow = new Date().toISOString().split('T')[0]; 
    const getTrips= await TripModel.findAll({
        include:{
            model:UserModel,
            attributes:['id','userName']
        },
        where:{UserId:req.id,
            registerDeadline:{[Op.gt]:dateNow}
        }
    });
    return res.status(200).json({message:"Success",getTrips});
};


export const getAvailableSeats=async(req,res,next)=>{
    const dateNow = new Date().toISOString().split('T')[0]; 
    const getTrips= await TripModel.findAll({
        attributes:['id','tripPlace','tripDate','availableSeats'],
        include:{
            model:UserModel,
            attributes:['id','userName']
        },
        where:{UserId:req.id,
            registerDeadline:{[Op.gt]:dateNow}
        }
    });
    return res.status(200).json({message:"Success",getTrips});
};


export const getAllTrips=async(req,res,next)=>{
    const dateNow = new Date().toISOString().split('T')[0]; 
    const getTrips= await TripModel.findAll({
        attributes:['id','tripPlace','tripDate','registerDeadline','availableSeats','price'],
        where:{registerDeadline:{[Op.gt]:dateNow}
        }
    });
    return res.status(200).json({message:"Success",getTrips});
};

export const getMyTrips=async(req,res,next)=>{
    const getTrips= await RegistrationModel.findAll({
        include:{
            model:TripModel,
            attributes:['id','tripPlace','tripDate','registerDeadline','availableSeats','price']
        },
        where:{UserId:req.id}
    });
    return res.status(200).json({message:"Success",getTrips});
};

