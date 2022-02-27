const inquirer = require('inquirer');
const connection = require('../config/connection')


const addDepartment = (department) => {
    inquirer.prompt([{
        type: 'input',
        message: 'For which department does the employee work?',
        name: 'departmentName',
    }])
    .then((answers) =>  {
        console.log(answers);
        connection.query(
            'INSERT INTO departments SET?', {
                department_name: answers.departmentName,
            },
            function(err) {
                console.log(err)
                if (err) throw err;
                console.log("Successfully inserted department");
                askTask();
            });
    })
}

module.exports = addDepartment;
