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
                message: 'What is the name of the department that this role will be in?'
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

const selectEmployee = [
        {
                type: 'list',
                name: 'selectEmployee',
                message: 'Please select the employee whose role you would like to update.',
                choices: []
        }
]

const selectNewRole = [
        {
                type: 'list',
                name: 'selectNewRole',
                message: "Please select the employee's new role.",
                choices: []
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
                                db.query('SELECT * FROM employees.role r INNER JOIN department d ON r.department_id = d.id', (err, res) => {
                                        if (err) throw err;
                                        console.table(res);
                                        init();
                                });
                                break;
                        
                        case 'View all employees':
                                db.query('SELECT e.id, e.first_name, e.last_name, e.manager_id, r.title, r.salary, d.name FROM employees.employee e INNER JOIN employees.role r ON e.role_id = r.id INNER JOIN employees.department d ON r.department_id = d.id', (err, res) => {
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
                                        db.query(`INSERT INTO employees.role (title, salary, department_id) VALUES ('${addRoleAnswers.roleName}', '${addRoleAnswers.roleSalary}', ${addRoleAnswers.roleDept})`, (err, res) => {
                                                if (err) throw err;
                                                console.log(`${addRoleAnswers.roleName} has been added to Roles.`);
                                                init();
                                        })
                                })
                                break;

                        case 'Add an employee':
                                inquirer.prompt(addEmployee)
                                .then((addEmployeeAnswers) => {
                                        db.query(`INSERT INTO employees.employee (first_name, last_name, role_id, manager_id) VALUES ('${addEmployeeAnswers.firstName}', '${addEmployeeAnswers.lastName}', ${addEmployeeAnswers.employeeRole}, ${addEmployeeAnswers.employeeManager})`, (err, res) => {
                                                if (err) throw err;
                                                console.log(`${addEmployeeAnswers.firstName} ${addEmployeeAnswers.lastName} has been added to Employees.`);
                                                init();
                                        })
                                })
                                break;
                        
                        case 'Update an employee role':
                                inquirer.prompt(selectEmployee)
                                .then((selectEmployeeAnswers) => {
                                        inquirer.prompt(selectNewRole)
                                        .then(() => {

                                        })                                })
                                // db.query('SELECT * FROM employees.employee', (err, res) => {
                                //         if (err) throw err;
                                //         console.table(res);
                                //         init();
                                // })
                                break;
                };
        })
}

// call function to initialize app
init();