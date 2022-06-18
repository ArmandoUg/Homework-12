// const inquirer = require('inquirer');
const startprompt= {
    type: 'list',
    name: "start menu",
    message:`!!!Welcome to the EZ Employee Manager mk 1.0!!!
    What option would you like to choose?`,
    choices: [
        `View all departments`,
        `View all roles`,
        `View all employees`,
        `Add a new department`,
        `Add a new role`,
        `Add a new employee`,
        `Update an employee's role`,
        `Update an employee's manager`,
        `View all employees by department`,
        `View all employees by manager`,
        `Delete a department`,
        `Delete a role`,
        `Delete an employee`,
        `Exit`
    ]
}
module.exports = startprompt;