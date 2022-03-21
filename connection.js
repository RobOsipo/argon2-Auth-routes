const mySQL = require('mysql');
const connection = mySQL.createPool({
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10
})


module.exports = connection;