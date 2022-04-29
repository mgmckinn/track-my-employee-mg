 //connect to mysql 
 const mysql = require('mysql2');
 const inquirer =require('inquirer');
 require('console.table');

 //Establish connection
 const connection = mysql.createConnection({
     host: 'localhost',
    port: 3306,
     user: 'root',
     password: 'M@ddog12',
     database: 'employee_db'
     
 });

  connection.connect(function(err) {
        if (err) throw err;
    console.log('Connected to the employees database.');
});


module.exports = connection;

 function start() {
     inquirer
     .prompt({
         type: 'list',
         name: 'option',
         message: 'What would you like to do today?',
         choices: [
            'Add Department', 
            'Add Role',
            'Add Employee',
            'View Department',
            'View Role',
            'View Employee',
            'Update Employee Role',
            'Exit',
         ]

     })

     .then(function (result) {
         console.log('You have chosen ' + result.option);
         switch (result.option) {
             case 'Add Department':
                 addDepartment();
                 break;
             case 'Add Role':
                 addRole();
                 break;
             case 'Add Employee':
                 addEmployee();
             case 'View Department':
                 viewDepartment();
                 break;
             case 'View Role':
                 viewRole();
                 break;
             case 'View Employee':
                 viewEmployee();
                 break;
             case 'Exit':
                 connection.end();
                 break;
         }
     });
 }

 function addDepartment() {
     inquirer
     .prompt({
         type: 'input',
         message: 'What department do you want to add?',
         name: 'department'
     })
     .then(function (res) {
         const department = res.department;
         const query = `INSERT INTO department (name) VALUES ("${department}")`;
         connection.query(query, function (err,res) {
             if (err) throw err;
             console.table(res);
             start();
         });
    });
 }

 function addRole() {
     inquirer
     .prompt([
         {
             type: 'input',
             message: 'What is the employee job title?',
             name: 'title',
         },
         {
             type: 'input',
             message: 'What is the position salary?',
             name: 'salary',
         },
         {
             type: 'input',
             message: 'What is the department ID for this position?',
             name: 'departmentID'
         }
     ])
     .then(function(res) {
         const title = res.title;
         const departmentID = res.departmentID;
         const salary = res.salary;
         const query = `INSERT INTO role (title, salary, departmentID) VALUES (${title}, ${salary}, ${departmentID}")`;
         connection.query(query, function(err, res) {
             if(err) throw err;
             console.table(res);
             start();
         });
     });
 }

 function addEmployee() {
     inquirer
     .prompt([
         {
             type: 'input',
             message: 'What is the first name of the employee?',
             name: 'firstName'
         }, 
         {
             type: 'input',
             message: 'What is the last name of the employee?',
             name: 'lastName'
         },
         {
             type: 'input',
             message: 'What is the employee roleID?',
             name: 'roleID'
         },
         {
             type: 'input',
             message: 'What is the employee manager ID?',
             name: 'managerID'
         },
     ])
     .then(function(res) {
         const firstName =res.firstName;
         const lastName =res.lastName;
         const roleID = res.roleID;
         const managerID = res.managerID;
         const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${firstName}, ${lastName}, ${roleID}, ${managerID}")`;
         connection.query(query, function(err,res) {
             if (err) throw err;
             console.table(res);
             start();
         });
     });
 }

 function viewDepartment() {
     const query = "SELECT * FROM department";
     connection.query(query, function(err,res) {
         if (err) throw err;
         console.table(res);
         start();
     });
 }

 function viewRole() {
     const query = "SELECT * FROM role";
     connection.query(query, function(err, res) {
         if (err) throw err;
         console.table(res);
         start();
     });

 }
  function viewEmployee() {
     const query = "SELECT * FROM employee";
     connection.query(query, function(err, res) {
         if (err) throw err;
         console.table(res);
         start();
     });

 } function updateRole() {
        const query = "SELECT * FROM employee";
        connection.query(query, function(err, res) {
            if (err) throw err;
            console.table(res);
            start();
             inquirer.prompt({
                 type: 'input',
                 message: "Which employee needs to be updated?",
                 name: "employee"
             });
         }
     );;

 }

