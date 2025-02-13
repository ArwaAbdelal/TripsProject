import {Router} from 'express';
import * as tripController from './trip.controller.js';
import {asyncHandler} from '../../utils/catchError.js';
import fileUpload from "../../utils/multer.js";
import {createTripsSchema, uploadTripPlacePicSchema} from './trip.validation.js';
import validation from '../../middleware/validation.js';
import auth from '../../middleware/auth.js';
const router=Router();

router.post('/createTrips',auth('tour organizer'),validation(createTripsSchema),asyncHandler(tripController.createTrips));
router.get('/getOrganizerTrips',auth('tour organizer'),asyncHandler(tripController.getOrganizerTrips));
router.get('/getContinuousTrips',auth('tour organizer'),asyncHandler(tripController.getContinuousTrips));
router.get('/getAvailableSeats',auth('tour organizer'),asyncHandler(tripController.getAvailableSeats));
router.post('/uploadTripPlacePic/:id',auth('tour organizer'),validation(uploadTripPlacePicSchema),fileUpload().single('image'),asyncHandler(tripController.uploadTripPlacePic));
router.get('/getAllTrips',auth('tourist'),asyncHandler(tripController.getAllTrips));
router.get('/getMyTrips',auth('tourist'),asyncHandler(tripController.getMyTrips));

export default router;