import { asyncHandler } from "../utils/catchError.js";
import { AppError } from "../utils/AppError.js";


const validation = (schema) => {
    return asyncHandler((req, res, next) => {
      const inputData = { ...req.body, ...req.params};
      const validateResult = schema.validate(inputData, { abortEarly: false });
      if (validateResult?.error) {
        return next(new AppError(validateResult.error, 400));
      }
      next();
    })
  };



/*
const validation = (schema) => {  
    return (req, res, next) => {
      const methods = ['body', 'params','headers'];
      const errors = [];
      methods.forEach((key) => {
        if (schema[key]) {
          const validate = schema[key].validate(req[key], { abortEarly: false });
          if (validate.error) {
            errors.push(validate.error);
          }
        }
      });
      if (errors.length > 0) {
        return next(new AppError(errors, 400));
      }
      next();
    }
  }
*/
export default validation;