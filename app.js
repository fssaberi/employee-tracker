const inquirer = require('inquirer');
const db = require('./db/connection');

// questions
const firstQ = [
        {
                type: 'list',
                name: 'start',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

        }]

const addDept = [
        {
                type: 'input',
                name: 'addDept',
                message: 'What is the name of the department?'
        }
]

const addRole = [
        {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role?'
        },
        {
                type: 'input',
                name: 'roleSalary',
                message: 'What is the salary of the role?'
        },
        {
                type: 'input',
                name: 'roleDept',
                message: 'What is the name of the department this role is in?'
        }
]

const addEmployee = [
        {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?"
        },
        {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's last name?"
        },
        {
                type: 'input',
                name: 'employeeRole',
                message: "What is the employee's role?"
        },
        {
                type: 'input',
                name: 'employeeManager',
                message: "Who is the employee's manager?"
        }
]

// initialize app
function init() {
        inquirer.prompt(firstQ)
        .then((answers) => {
                switch(answers.start) {
                        case 'View all departments':
                                db.query('SELECT * FROM employees.department', (err, res) => {
                                        if (err) throw err;
                                        console.table(res);
                                        init();
                                });
                                break;

                        case 'View all roles':
                                db.query('SELECT * FROM employees.role', (err, res) => {
                                        if (err) throw err;
                                        console.table(res);
                                        init();
                                });
                                break;
                        
                        case 'View all employees':
                                db.query('SELECT * FROM employees.employee', (err, res) => {
                                        if (err) throw err;
                                        console.table(res);
                                        init();
                                });
                                break;

                        case 'Add a department':
                                inquirer.prompt(addDept)
                                .then((addDeptAnswer) => {
                                        db.query(`INSERT INTO employees.department (name) VALUES ('${addDeptAnswer.addDept}')`, (err, res) => {
                                                if (err) throw err;
                                                console.log(`${addDeptAnswer.addDept} has been added to Departments.`);
                                                init();
                                        });
                                });
                                break;

                        case 'Add a role':
                                inquirer.prompt(addRole)
                                .then((addRoleAnswers) => {
                                        // function to add role to table
                                        db.query('SELECT * FROM employees.role', (err, res) => {
                                                if (err) throw err;
                                                console.table(res);
                                                init();
                                        })
                                })
                                break;

                        case 'Add an employee':
                                inquirer.prompt(addEmployee)
                                .then((addEmployeeAnswers) => {
                                        // function to add employee to table
                                        db.query('SELECT * FROM employees.employee', (err, res) => {
                                                if (err) throw err;
                                                console.table(res);
                                                init();
                                        })
                                })
                                break;
                        
                        case 'Update an employee':
                                // function to update an employee;
                                db.query('SELECT * FROM employees.employee', (err, res) => {
                                        if (err) throw err;
                                        console.table(res);
                                        init();
                                })
                                break;
                };
        })
}

// call function to initialize app
init();