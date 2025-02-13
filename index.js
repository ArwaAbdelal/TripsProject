import express from 'express';
import initApp from './src/index.router.js';




const app=express();
initApp(app,express);






app.listen(3000, ()=>{
    console.log("Server is Running");
})