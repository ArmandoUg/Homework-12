const inquirer = require('inquirer');
const connection = require('./connection');
const startprompt = require('./prompts');
// require('dotenv').config();
// const startprompt= {
//     type: 'list',++++
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


const viewDepartments = () => {
    connection.query("SELECT * FROM employee").then(results => {
        console.table(results);
    })
}

function start() {
    inquirer.prompt(startprompt).then(answers => {
        console.log("You picked: " + answers);
        switch (answers.startMenu) {
            case "View all departments":
                viewDepartments();
                // break;
        }
    })
    }

    // inquirer.prompt(startprompt).them(response => {
    //     switch (response.start - menu) {
    //         case "View all departments":
    //             viewDepartments();
    //             break;
    //         case "View All Roles":
    //             viewRoles();
    //             break;
    //         case "View All Employees":
    //             viewEmployees();
    //             break;
    //         case "Add a new department":
    //             addDepartment();
    //             break;
    //         case "Add a new role":
    //             addRole();
    //             break;
    //         case "Add a new employee":
    //             addEmployee();
    //             break;
    //         case "Update an employee's role":
    //             updateEmployeeRole();
    //             break;
    //         case "Update an employee's manager":
    //             updateEmployeeManager();
    //             break;
    //         case "View all employees by department":
    //             viewEmployeesByDepartment();
    //             break;
    //         case "View all employees by manager":
    //             viewEmployeesByManager();
    //             break;
    //         case "Delete a department":
    //             deleteDepartment();
    //             break;
    //         case "Delete a role":
    //             deleteRole();
    //             break;
    //         case "Delete an employee":
    //             deleteEmployee();
    //             break;
    //         case "Exit":
    //             exit();
    //             break;
    //     }
    // }
    // )
    // }

start();