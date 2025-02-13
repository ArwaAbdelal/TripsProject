import { connectDB } from "../DB/connection.js";
import authRouter from './modules/auth/auth.router.js';
import touristRouter from './modules/tourist/tourist.router.js';
import tripRouter from './modules/trip/trip.router.js';
import { AppError } from "./utils/AppError.js";
import cors from 'cors';

const initApp=(app,express)=>{
connectDB();
app.use(express.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/tourist',touristRouter);
app.use('/trip',tripRouter);
app.get('*',(req,res,next)=>{
    return next (new AppError("page not found",404));
});

};

export default initApp;