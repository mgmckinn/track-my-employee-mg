//connect to mysql

const mysql= require('mysql');
const { promisify } = require('util');

const connection =mysql.createConnection({
    host: 'localhost',
    port: 3301,
    user: 'root',
    password: 'M@ddog12',
    database: 'employee_db'
});

connection.connect((err) => {
    console.log('You are now connected to the database.');   

});

module.exports = connection;
module.exports.queryPromise = promisify(connection.query.bind(connection));