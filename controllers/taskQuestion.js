const inquirer = require('inquirer');
const color  = require('color');

const taskQuestion = [{
    type: 'list',
    name: 'task',
    message: 'Please select from the following choices:' .brightblue,

    choices: [
        new inquirer.Separator('===VIEW INFO==='.yellow),
        'View All Employees',
        'View Employees by Manager',
        'View All Roles',
        'View All Departments',
    new inquirer.Separator('===ADD NEW EMPLOYEE==='.green),
        'Add Employee',
        'Add Role', 
        'Add Department',

        new inquirer.Separator('===UPDATE EMPLOYEE==='.green),
        'Update Employee',
    new inquirer.Separator('===DELETEMPLOYEE INFO==='.red),
    'Delete Employee',
    'Delete Role',
    'Delete Department',
    new inquirer.Separator('===EXIT===' .orange),
    'Exit Application', 
    ],
    pageSize: 20,
}];

module.exports =taskQuestion;