import joi from "joi";
export const joinTripSchema=joi.object({
    tripId :joi.number().required(),
    numberOftourist: joi.number().required()
});