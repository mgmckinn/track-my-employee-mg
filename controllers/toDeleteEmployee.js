const inquirer = require('inquirer');
const {getAllEmp} = require('./getAll');

const toDeleteEmployee = () => {
    return new Promise((resolve, reject) => {
        getAllEmp()
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

module.exports = toDeleteEmployee;
