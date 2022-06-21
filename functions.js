const connection = require('./connection');
const inquirer = require('inquirer');
const prompts = require('./prompts');
const connectionfunctions = require('./server');

// const dep = () => {
//     connection.query("SELECT * FROM department").then(results => {
//         results.map(department => {
//             return {
//                 name: department.name,
//                 value: department.id
//             }
//         })
//     })
// }


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
    connection.query("SELECT * FROM department").then(results => {
        console.log(results);
        const departmentchoices = results.map(department => {
            return {
                name: department.name,
                value: department.id
            }
        })
        inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What will be the salary of the role you would like to add?'
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'What department will this role be in?',
            choices: departmentchoices
        }
        ]).then(answers => {
            console.log(answers);
            connection.query("INSERT INTO role SET ?", {
                title: answers.title,
                salary: answers.salary,
                department_id: answers.department_id
            }).then(answers => {
                console.log(`${answers.title} has been added to the database.`);
                // setTimeout(restart, 2000);
                return restart();
            })
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
            console.log(`${answers.first_name} ${answers.last_name} has been added to the database.`);
            // setTimeout(restart, 2000);
            return restart();
        })
    })
}

const updateEmployeeRole = () => {
    connection.query("SELECT * FROM employee").then(employees => {
        const employeechoices = employees.map(employee => {
            return {
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id
            }
        })
        connection.query("SELECT * FROM role").then(roles => {
            const rolechoices = roles.map(role => {
                return {
                    name: role.title,
                    value: role.id
                }
        })
        inquirer.prompt([{
            type: 'list',
            name: 'employee_id',
            message: 'Which employee would you like to update?',
            choices: employeechoices
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What role would you like to assign?',
            choices: rolechoices
        }
        ]).then(answers => {

            connection.query("UPDATE employee SET ? WHERE ?", [{
                role_id: answers.role_id
            },
            {
                id: answers.employee_id
            }
            ]).then(answers => {
                console.log(`Employee has been updated.`);
            })
        })
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
    .catch(err => {
        console.log("Error: Something went wrong " + err);
    })
}

function exit() {
    console.log("Goodbye!");
    connection.end();
}

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, restart, exit };