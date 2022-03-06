const util = require('util');
const connection = require('../config/connection');

const queryAsync = util.promisify(connection.query).bind(connection);

const getAllEmp = async (value) => {
    try {
        const rows = await queryAsync("SELECT * FROM employees");
        return rows.map((employee => ({ name: `${employee.first_name} ${employee.last_name}`,value: employee.id}));
    } catch(err) {
        console.log('The was an error with querying select all employees');
    }
};