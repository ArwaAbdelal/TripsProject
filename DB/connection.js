import Sequelize from 'sequelize';

export const sequelize = new Sequelize('freedb_TripProject', 'freedb_arwaFirst', '2xRAWf5uc%@6z2n', {
  host: 'sql.freedb.tech',
  port:3306,
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export const connectDB=()=> {
    sequelize.sync()
    .then(()=>{
        console.log('connection established');
    }).catch ((error)=>{
        console.log('error to connect database ' + error);
    });
};
  
