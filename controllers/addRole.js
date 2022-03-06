const inquirer = require('inquirer');
const askTask = require('../index')

const connect = require('../config/connection');
const {allDepartments} = require('../db/queries');
const {getAllDepartments} = require('./getAll');

const addRole = async () => {
    const allDepartments =await getAllDepartments()
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: "What is your title?",
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is your current salary?",
    },
    {
        type: 'list',
        name: 'departmentId',
        message: "For which department does this employee work?",
        choices: allDepartments
    }
    ])

    await connection.queryPromise(
        "INSERT INTO roles SET?", {
            title: answers.title,
            salary: answers.salary,
            department_id: Number(answers.departmentId),
        }
    );

    console.log("You have added the role successfully");

};

module.exports = addRole;
