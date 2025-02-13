import { connectDB } from "../DB/connection.js";
import authRouter from './modules/auth/auth.router.js';
import touristRouter from './modules/tourist/tourist.router.js';
import tripRouter from './modules/trip/trip.router.js';

const initApp=(app,express)=>{
connectDB();
app.use(express.json());

app.use('/auth',authRouter);
app.use('/tourist',touristRouter);
app.use('/trip',tripRouter);


};

export default initApp;