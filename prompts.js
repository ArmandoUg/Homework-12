// const inquirer = require('inquirer');
const startprompt= {
    type: 'list',
    name: "startMenu",
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
    ],
}

const addDepartment = {
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department you would like to add?'
}

const addRole = {
    type: 'input',
    name: 'roleTitle',
    message: 'What is the title of the role you would like to add?'
}

const addEmployee = {
    type: 'input',
    name: 'employeeName',
    message: 'What is the name of the employee you would like to add?'
}

const updateEmployeeRole = {
    type: `input`,
    name: `employeeName`,
    message: `What is the name of the employee you would like to update?`
}

const updateEmployeeManager = {
    type: `input`,
    name: `employeeName`,
    message: `What is the name of the employee you would like to update?`
}

const deleteDepartment = {
    type: `list`,
    name: `departmentName`,
    message: `What is the name of the department you would like to delete?`,
    choices: [
    ]
}

module.exports = startprompt;