const inquirer = require('inquirer');
const connection = require('./connection');

// const startprompt= {
//     type: 'list',
//     name: "start menu",
//     message:`!!!Welcome to the EZ Employee Manager mk 1.0!!!
//     What option would you like to choose?`,
//     choices: [
//         `View all departments`,
//         `View all roles`,
//         `View all employees`,
//         `Add a new department`,
//         `Add a new role`,
//         `Add a new employee`,
//         `Update an employee's role`,
//         `Update an employee's manager`,
//         `View all employees by department`,
//         `View all employees by manager`,
//         `Delete a department`,
//         `Delete a role`,
//         `Delete an employee`,
//         `Exit`
//     ]
// }

function start() {
    inquirer.prompt(startprompt).them(response => {
    })
}

connection.promise().query(
    `SELECT * FROM information_schema.tables WHERE table_schema = '${process.env.DB_NAME}' AND table_name = 'departments'
`).then(res => {
        console.log(res)
    })
    .catch(err => { console.log(err) });