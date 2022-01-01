const inquirer = require('inquirer');
const db = require('./db/connection');

// db.query('SELECT * FROM employees.employee', (err, res) => {
//     if (err) throw err;
        // console.table(res);
// })

// initialize inquirer prompt
function init() {
        inquirer.prompt(firstQ)
        .then((answers) => {
                switch(answers.start) {
                        case 'View all departments':
                                // function to view all departments;
                                break;

                        case 'View all roles':
                                // function to view all roles;
                                break;

                        case 'Add a department':
                                // function to add a department;
                                break;

                        case 'Add a role':
                                // function to add a role;
                                break;

                        case 'Add an employee':
                                // function to add an employee;
                                break;
                        
                        case 'Update an employee':
                                // function to update an employee;
                                break;
                }
        })
}

// ask series of questions
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
                name: 'add dept',
                message: 'What is the name of the department?'
        }
]

const addRole = [
        {
                type: 'input',
                name: 'role name',
                message: 'What is the name of the role?'
        },
        {
                type: 'input',
                name: 'role salary',
                message: 'What is the salary of the role?'
        },
        {
                type: 'input',
                name: 'role department',
                message: 'What is the name of the department this role is in?'
        }
]

const addEmployee = [
        {
                type: 'input',
                name: 'first name',
                message: "What is the employee's first name?"
        },
        {
                type: 'input',
                name: 'last name',
                message: "What is the employee's last name?"
        },
        {
                type: 'input',
                name: 'employee role',
                message: "What is the employee's role?"
        },
        {
                type: 'input',
                name: 'employee manager',
                message: "Who is the employee's manager?"
        }
]

// switch case, depending on user selection

// function call to initialize app
init();