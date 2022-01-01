const inquirer = require('inquirer');
const db = require('./db/connection');

// db.query('SELECT * FROM employees.employee', (err, res) => {
//     if (err) throw err;
        // console.table(res);
// })

// initialize inquirer prompt
function init() {
        return inquirer.prompt(questions).then((answers) => {
                console.log(answers)
        })
        .catch((err) => {
                console.log(err);
        })
}

// ask series of questions
const questions = [
        {
                type: 'checkbox',
                name: 'start',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

        },
        {

        },
        {

        },

]

// switch case, depending on user selection

// function call to initialize app
init();