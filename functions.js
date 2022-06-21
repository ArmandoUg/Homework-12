const connection = require('./connection');
const inquirer = require('inquirer');
const prompts = require('./prompts');
const start = require(`./server`);

const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.log(`------------------------Departments-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        setTimeout(restart, 2000);
    })
    
}

const viewRoles = () => {
    connection.query("SELECT * FROM role").then(results => {
        console.log(`------------------------Roles-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        setTimeout(restart, 3000);
    })
}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee").then(results => {
        console.log(`------------------------Employees-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        setTimeout(restart, 3000);
    })
}

const addDepartment = () => {
    inquirer.prompt(prompts.addDepartmentprompt).then(answers => {
        connection.query("INSERT INTO department SET ?", {
            name: answers.departmentName
        }).then(answers => {
            console.log(`${answers.departmentName} has been added to the database.`);
            setTimeout(start.start, 2000);
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
        setTimeout(start.start, 2000);
    })
})
}

const addEmployee = () => {
    connection.query("SELECT * FROM role").then(roles => {
       console.table(roles);
        connection.query("SELECT * FROM employee").then(employees => {
            console.table(employees);
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
            setTimeout(start.start, 2000);
})
})
}

const restart = () => {
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
            case "Update an employee's manager":
                functions.updateEmployeeManager();
                break;
            case "View all employees by department":
                functions.viewEmployeesByDepartment();
                break;
            case "View all employees by manager":
                functions.viewEmployeesByManager();
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
}


module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee };