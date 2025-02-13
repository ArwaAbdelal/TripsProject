import { connectDB } from "../DB/connection.js";
import authRouter from './modules/auth/auth.router.js';
import touristRouter from './modules/tourist/tourist.router.js';
import tripRouter from './modules/trip/trip.router.js';
import cors from 'cors';

const initApp=(app,express)=>{
connectDB();
app.use(express.json());
app.use(cors());
app.use('/auth',authRouter);
app.use('/tourist',touristRouter);
app.use('/trip',tripRouter);
app.get('*',(req,res,next)=>{
    return req.status(404),json({message:"page not found"});
});
app.get('/',(req,res)=>{
return res.status(200).json({message:"Welcome"});
});
};

export default initApp;