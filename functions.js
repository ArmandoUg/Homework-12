const connection = require('./connection');
const inquirer = require('inquirer');
const prompts = require('./prompts');
const connectionfunctions = require('./server');

const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.log(`------------------------Departments-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        // setTimeout(restart, 2000);
        return restart();
    })
    

}

const viewRoles = () => {
    connection.query("SELECT * FROM role").then(results => {
        console.log(`------------------------Roles-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        return restart();
    })
    
}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee").then(results => {
        console.log(`------------------------Employees-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        // setTimeout(restart, 3000);
        return restart();
    })
}

const addDepartment = () => {
    inquirer.prompt(prompts.addDepartmentprompt).then(answers => {
        connection.query("INSERT INTO department SET ?", {
            name: answers.departmentName
        }).then(answers => {
            console.log(`${answers.departmentName} has been added to the database.`);
            // setTimeout(restart, 2000);
            return restart();
        })
    })
}

const addRole = () => {
    inquirer.prompt(prompts.addRoleprompt).then(answers => {
        connection.query("INSERT INTO role SET ?", {
            title: answers.roleTitle,
            salary: answers.roleSalary,
            department_id: answers.roleDepartment
        })
            .then(answers => {
                console.log(`${answers.roleTitle} has been added to the database.`);
                // setTimeout(restart, 2000);
                return restart();
            })
    })
}

const addEmployee = () => {
    connection.query("SELECT * FROM employee").then(employees => {
        console.table(employees);
        connection.query("SELECT * FROM role").then(roles => {
            console.table(roles);

        })
    });
    inquirer.prompt(prompts.addEmployeeprompt).then(answers => {

        connection.query("INSERT INTO employee SET ?", {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
        }).then(answers => {
            console.log(`${answers.employeeFirstName} ${answers.employeeLastName} has been added to the database.`);
            // setTimeout(restart, 2000);
            return restart();
        })
    })
}

const restart = () => {
    inquirer.prompt(prompts.startprompt).then(answers => {
        console.log("You picked: " + answers.startMenu);
        switch (answers.startMenu) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a new department":
                addDepartment();
                break;
            case "Add a new role":
                addRole();
                break;
            case "Add a new employee":
                addEmployee();
                break;
            case "Update an employee's role":
                updateEmployeeRole();
                break;
            case "Update an employee's manager":
                updateEmployeeManager();
                break;
            case "View all employees by department":
                viewEmployeesByDepartment();
                break;
            case "View all employees by manager":
                viewEmployeesByManager();
                break;
            case "Delete a department":
                deleteDepartment();
                break;
            case "Delete a role":
                deleteRole();
                break;
            case "Delete an employee":
                deleteEmployee();
                break;
            case "Exit":
                exit();
                break;
        }
    })
}

function exit() {
    console.log("Goodbye!");
    connection.end();
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee };