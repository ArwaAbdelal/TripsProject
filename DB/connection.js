import Sequelize from 'sequelize';

export const sequelize = new Sequelize('trips', 'root', 'root', {
  host: 'localhost',
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
  
