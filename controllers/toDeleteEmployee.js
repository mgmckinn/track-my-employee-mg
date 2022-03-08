const inquirer = require('inquirer');
const {getAllEmployees} = require('./getAll');

const toDeleteEmployees = () => {
    return new Promise((resolve, reject) => {
        getAllEmployees()
        .then((allEmployees) => 
            inquirer.prompt([{
                type: 'list',
                name: 'deleteEmployees',
                message: 'Which employees do you want to delete?',
                choices: allEmployees
            },])
            )
            .then ((answers) => (answers))
            .catch((err) => reject(err))
    });
};

module.exports.deleteEmployees
