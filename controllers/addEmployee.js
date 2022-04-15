const inquirer = require('inquirer');
const connection = require('../config/connection');

const { getAllRoles, getAllManagers } = require('./getAll');

const addEmployee = (askTask) => {
    Promise.all([getAllRoles(), getAllManagers()])
        .then(([allRoles, allManagers]) => 
         inquirer.prompt([{
                    type: 'input',
                    name: 'firstName',
                    message: "What is the employee's first name?",
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: "What is the employee's last name?",
                },
                {
                    type: 'list',
                    name: 'roleId',
                    message: "What is the employee's role?",
                    choices: allRoles
                },
                {
                    type: 'list',
                    name: 'managerOrNo',
                    message: "Does the employee have a manager?",
                    choices: ['yes', 'no'],
                },
                {
                    type: 'list',
                    name: 'managerId',
                    message: "Who is the employee's manager?",
                    choices: allManagers,
                    when: (answers) => answers.managerOrNo === 'yes',
                },
        {
            type: 'list',
            name: 'managerId',
            message: "Who is your employee's manager?",
            choices: getAllManagers,
            when: (answers) => answers.ManagerOrNot === 'yes',
        }
        ])).then((answers) => {
            if (answers.ManagerOrNot === 'yes') {
                connection.query(
                    "INSERT INTO employees SET?", {
                        first_name: answers.firstName,
                        last_name: answers.lastName,
                        role_id: Number(answers.roleId),
                    },
                    function(err) {
                         if (err) throw err;
                         console.log("You have added your manager successfully")
                         askTask();
                    }
                );
            }
        }).catch((err) => console.log(err));
    };
    module.exports = addEmployee;
