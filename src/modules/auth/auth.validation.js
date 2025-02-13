import joi from "joi";
export const registerSchema=joi.object({
    userName: joi.string().min(3).max(25).required(),
    email: joi.string().email().required(),
    phoneNumber:joi.number().min(10),
    password: joi.string().min(6).required(),
    role: joi.valid('tourist','tour organizer')
});

export const loginSchema=joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

