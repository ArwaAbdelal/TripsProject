import {Router} from 'express';
import * as touristController from './tourist.controller.js';
import { asyncHandler } from '../../utils/catchError.js';
import auth from '../../middleware/auth.js';
import validation from '../../middleware/validation.js';
import { joinTripSchema } from './tourist.validation.js';
const router=Router();

router.post('/joinTrip',auth('tourist'),validation(joinTripSchema) ,asyncHandler(touristController.joinTrip));

export default router;