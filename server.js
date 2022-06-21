const inquirer = require('inquirer');
// const connection = require('./connection');
const functions = require('./functions');
const prompts = require('./prompts');
const cTable = require('console.table');
// const viewDepartments = require('./functions');
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
    inquirer.prompt(prompts.startprompt).then(answers => {
        console.log("You picked: " + answers.startMenu);
        switch (answers.startMenu) {
            case "View all departments":
                functions.viewDepartments();
                break;
            case "View all roles":
                functions.viewRoles();
                break;
            case "View all employees":
                functions.viewEmployees();
                break;
            case "Add a new department":
                functions.addDepartment();
                break;
            case "Add a new role":
                functions.addRole();
                break;
            case "Add a new employee":
                functions.addEmployee();
                break;
            case "Update an employee's role":
                functions.updateEmployeeRole();
                break;
            case "Delete a department":
                functions.deleteDepartment();
                break;
            case "Delete a role":
                functions.deleteRole();
                break;
            case "Delete an employee":
                functions.deleteEmployee();
                break;
            case "Exit":
                exit();
                break;
        }
    })
    .catch(err => {
        console.log("Error: Something went wrong " + err);
        process.exit();
    })
}


function exit() {
    console.log("Goodbye!");
}

start();

// module.exports = { start, exit };