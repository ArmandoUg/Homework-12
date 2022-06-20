const connection = require('./connection');


const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.table(results);
        setTimeout(start, 2000);
    })
}

const viewRoles = () => {
    connection.query("SELECT * FROM role").then(results => {
        console.table(results);
    })
}

const viewEmployees = () => {
    connection.query("SELECT * FROM employee").then(results => {
        console.table(results);
    })
}

const addDepartment = () => {
    inquirer.prompt([]).then(answers => {
        connection.query("INSERT INTO department SET ?", answers).then(results => {
        })
    })
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment };