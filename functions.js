const connection = require('./connection');
const start = require(`./server`);

const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.log(`------------------------Departments-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
        // setTimeout(start.start, 3000);
    })
}

const viewRoles = () => {
    connection.query("SELECT * FROM role").then(results => {
        console.log(`------------------------Roles-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
    })
}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee").then(results => {
        console.log(`------------------------Employees-----------------------------`);
        console.table(results);
        console.log(`-----------------------------------------------------------------`);
    })
}

const addDepartment = () => {
    inquirer.prompt(addDepartment).then(answers => {
        connection.query("INSERT INTO department SET ?", {
            name: answers.departmentName
        }).then(answers => {
            console.log(`${answers.departmentName} has been added to the database.`);
            setTimeout(start.start, 2000);
    })
})
}

const addRole = () => {
    inquirer.prompt(addRole).then(answers => {
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
    inquirer.prompt(addEmployee).then(answers => {
        connection.query("INSERT INTO employee SET ?", {
            first_name: answers.employeeFirstName,
            last_name: answers.employeeLastName,
            role_id: answers.employeeRole,
            manager_id: answers.employeeManager
        }).then(answers => {
            console.log(`${answers.employeeFirstName} ${answers.employeeLastName} has been added to the database.`);
            setTimeout(start.start, 2000);
        })
    })
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment };