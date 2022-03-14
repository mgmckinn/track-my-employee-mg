const inquirer = require('inquirer');
const taskQuestion = require('./controllers/taskQuestion');

const addDepartment = require('./controllers/addDepartment');
const addEmployee = require('./controllers/addEmployee');
const dal = require('./controllers/dal');
const toDeleteDepartment = require('./controllers/toDeleteDepartment');
const toDeleteEmployee = require('./controllers/toDeleteEmployee');
const toDeleteRole = require('./controllers/toDeleteRole');
const updateEmployee = require('./controllers/updateEmployee');
const viewByManager = require('./controllers/viewByManager');
const queries = require('./db/queries');

const askTask = () => {
    inquirer
    .prompt(taskQuestion)
    .then((answers) => {
        const task = answers.task;

        if(task === 'View All Employees') {
            dal.viewAll(queries.allEmployees).then((res) => askTask());

        } else if (task === 'View Employees by Manager') {
            viewByManager()
           .then ((answers) => dal.viewAllBy(queries.allEmployeesByManager, 'm.id', answer.managerId))
            .then(() => askTask())
        
        }else if (task === 'View All Roles') {
            dal.viewAll (queries.allRoles)
            .then (()=> askTask());
        }else if (task === 'View All Departments') {
            dal.viewAll (queries.allDepartments)
            .then(() => askTask());
        }else if (task === 'Add Employee') {
            updateEmployee().then(()=> askTask());

        }else if (task === 'Delete Employee') {
            toDeleteEmployee()
            .then((answers) => dal.deleteForm(queries.deleteId, 'employees', Number(answers.employeeToDelete)))
            .then (() => askTask());
        }else if (task === 'Delete Role') {
            toDeleteRole()
            .then ((answers) => dal.deleteForm(queries.deleteId, 'roles', Number(answers.roleToDelete)))
            .then (() => askTask());
        }else if (task === 'Delete Department') {
            toDeleteDepartment()
            .then ((answers) => dal.deleteForm(queries.deleteId, 'departments', Number(answers.departmentToDelete)))
            .then (() => askTask());
        }else {
            process.exit();
        }
    })
    .catch(err => console.log(err));
};
askTask();

module.exports = askTask;