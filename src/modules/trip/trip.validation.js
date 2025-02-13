import joi from "joi";
export const createTripsSchema=joi.object({
  tripPlace :joi.string().max(20).required(),
  tripDate: joi.date().required(),
  registerDeadline: joi.date().required(),
  maxNumberOfSeats:joi.number().required(),
  price:joi.number().required()
});

export const uploadTripPlacePicSchema=joi.object({
  id:joi.number().required()
});