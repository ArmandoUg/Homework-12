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

const addDepartmentprompt = {
    type: 'input',
    name: 'departmentName',
    message: 'What is the name of the department you would like to add?'
}

const addRoleprompt = {
    type: 'input',
    name: 'roleTitle',
    message: 'What is the title of the role you would like to add?'
}

const addEmployeeprompt = [{
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the employee you would like to add?'
},
{
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the employee you would like to add?'
},
{
    type: 'list',
    name: 'role_id',
    message: 'What is the role id of the employee you would like to add?',
    choices: [
        'Sales Lead',
        'Salesperson',
        'Lead Engineer',
        'Software Engineer',
        `Account Manager`,
        'Accountant',
        'Legal Team Lead',
        `Lawyer`
    ],
},
{
    type: 'list',
    name: 'manager_id',
    message: 'What is the manager id for the manager in charge of employee you would like to add?',
    choices: [
        '1',
        `3`,
        `5`,
        `7`,
    ],
},
]

const updateEmployeeRoleprompt = {
    type: `input`,
    name: `employeeName`,
    message: `What is the name of the employee you would like to update?`
}

const updateEmployeeManagerprompt = {
    type: `input`,
    name: `employeeName`,
    message: `What is the name of the employee you would like to update?`
}

const deleteDepartmentprompt = {
    type: `list`,
    name: `departmentName`,
    message: `What is the name of the department you would like to delete?`,
    choices: [
    ]
}

module.exports = {startprompt , addDepartmentprompt, addRoleprompt, addEmployeeprompt, updateEmployeeRoleprompt, updateEmployeeManagerprompt, deleteDepartmentprompt};