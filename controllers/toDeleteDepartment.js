const inquirer = require('inquirer');
const {getAllDepartments} =require('./getAll');

const toDeleteDepartment = () => {
    return new Promise((resolve, reject) => {
        getAllDepartments()
        .then((allDepartments) => 
            inquirer.prompt ([{
                type: 'list',
                name: 'departmentToDelete',
                message: 'Please choose a department to delete',
                choices: allDepartments

            }, ])
        ) 
        .then ((answers) => resolve(answers))
        .catch ((err) => reject(err))
        
    });
};

module.exports = toDeleteDepartment;
