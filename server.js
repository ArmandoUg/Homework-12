const connection = require('./connection');

connection.promise().query(
    `SELECT * FROM information_schema.tables WHERE table_schema = '${process.env.DB_NAME}' AND table_name = 'departments'
`).then(res => {
        console.log(res)
    })
    .catch(err => { console.log(err) });