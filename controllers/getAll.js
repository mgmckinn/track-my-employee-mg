const { FORMERR } = require('dns');
const util = require('util');
const connection = require('../config/connection');

const queryAsync = util.promisify(connection.query).bind(connection);

const getAllEmp = async(value) => {
    try {
        const rows = await queryAsync("SELECT * FROM employees");
        return rows.map((employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id }));
    } catch (err) {
        console.log('There was an error querying the database to select all employees.');
    }
};

const getAllRoles = async() => {
    try {
        const rows = await queryAsync("SELECT * FROM roles");
        return rows.map((role) => ({name: role.title, value: role.id }));
    } catch (err) {
        console.log(`Error getting roles`, err);
    }
};

const getAllDepartments = async() => {
    try{
    const rows = await queryAsync("SELECT * FROM departments");
    return rows.map((department) => ({ name: department.name, value: department.id}));
    } catch (err) {
    console.log(`Error getting department`, err);
    }

};

const getAllManagers = async () => {
    try {
        const rows  = await queryAsync("SELECT * FROM employees WHERE manager_id IS NULL");
        return rows.map((manager) => ({name: `${manager.first_name, value}, ${manager.last_name}`, value:manager_id}));
    } catch (err) {
        console.log('Error querying getAllManagers'. err);
    }
};

module.exports = {getAllEmp, getAllRoles, getAllDepartments, getAllManagers};
