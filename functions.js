const connection = require('./connection');


const viewDepartments = () => {
    connection.query("SELECT * FROM department").then(results => {
        console.table(results);
    })
}

module.exports = { viewDepartments };