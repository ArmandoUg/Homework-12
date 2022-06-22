// const inquirer = require('inquirer');

const startprompt= {
    type: 'list',
    name: "startMenu",
    message:
    `    ______--------_______-------_____-------_____-----___
    |!!!Welcome to the EZ Employee Manager mk 1.0!!!!!!!!!|
    |_____--------_______-------_____-------_____-----____|
    What option would you like to choose?`,
    choices: [
        `View all departments`,
        `View all roles`,
        `View all employees`,
        `Add a new department`,
        `Add a new role`,
        `Add a new employee`,
        `Update an employee's role`,
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


// const addEmployeeprompt = [{
//     type: 'input',
//     name: 'first_name',
//     message: 'What is the first name of the employee you would like to add?'
// },
// {
//     type: 'input',
//     name: 'last_name',
//     message: 'What is the last name of the employee you would like to add?'
// },
// {
//     type: 'list',
//     name: 'role_id',
//     message: 'What is the role id of the employee you would like to add?',
//     choices: [
//         '1',
//         '2',
//         '3',
//         '4',
//         `5`,
//         '6',
//         '7',
//         `8`,
//     ],
// },
// {
//     type: 'list',
//     name: 'manager_id',
//     message: 'What is the manager id for the manager who will be in charge of this new employee?',
//     // todo add a null choice for no manager
//     choices: [
//         '1',
//         `3`,
//         `5`,
//         `7`,
//         {
//             name: 'No manager',
//             value: null
//         }
        
//     ],
// },
// ]

// const updateEmployeeRoleprompt = [{
//     type: `input`,
//     name: `employeeName`,
//     message: `What is the name of the employee you would like to update?`
// },
// {
//     type: `list`,
//     name: `role_id`,
//     message: `What is the role id of the employee you would like to update?`,
//     choices: []
// }]


module.exports = {startprompt , addDepartmentprompt};