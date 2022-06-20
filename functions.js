const connection = require('./connection');
const start = require(`./server`);

const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.table(results);
        setTimeout(start.start, 3000);
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
    inquirer.prompt(addDepartment).then(answers => {
        connection.query("INSERT INTO department SET ?", {
            name: answers.departmentName
        }).then(answers => {
            console.log(`${answers.departmentName} has been added to the database.`);
            setTimeout(start.start, 2000);
    })
})
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment };