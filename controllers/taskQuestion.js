const inquirer = require('inquirer');
const colors = require('colors');

const questTask = [{
    type: 'list',
    name: 'task',
    message: 'What would you like to do?'.brightCyan,
    choices: [
        new inquirer.Separator('=== VIEW INFO ==='.orange),
        'View all employees',
        'View employees by manager',
        'View all roles',
        'View all departments',
        new inquirer.Separator('=== ADD NEW INFO ==='.orange),
        'Add employee',
        'Add role',
        'Add department',
        new inquirer.Separator('=== UPDATE INFO ==='.orange),
        'Update employee',
        new inquirer.Separator('=== DELETE INFO ==='.orange),
        'Delete employee',
        'Delete role',
        'Delete department',
        new inquirer.Separator('=== EXIT ==='.orange),
        'Exit Application'.brightMagenta,
    ],
    pageSize: 18
}];

module.exports = questTask;