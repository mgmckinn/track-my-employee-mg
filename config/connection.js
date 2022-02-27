//connect to mysql

const mysql= require('mysql');
const { promisify } = require('util');

const connection =mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db'
});

connection.connect((err) => {
    console.log('You are now connected to the database.');   

});

module.exports = connection;
module.exports.queryPromise = promisify(connection.query.bind(connection));