const inquirer = require('inquirer');
const connection = require('../config/connection');

const { getAllRoles, getAllManagers } = require('./getAll');

const addEmployee = (askTask) => {
    Promise.all([getAllRoles(), getAllManagers()])
        .then(([getAllRoles, getAllManagers]) => 
        inquirer.prompt([{
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?",
            choices: getAllRoles
        },

        {
            type: 'list',
            name: 'haveManagerOrNot',
            message: "Does the employee have a manager?",
            choices: ['yes', 'no']
        },
        {
            type: 'list',
            name: 'managerId',
            message: "Who is your employee's manager?",
            choices: getAllManagers,
            when: (answers) => answers.haveManagerOrNot === 'yes',
        }
        ])).then((answers) => {
            if (answers.haveManagerOrNot === 'yes') {
                connection.query(
                    "INSERT TO employees SET?", {
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
    module.exports = addEmployee
