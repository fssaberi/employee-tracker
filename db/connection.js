const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'schmoo24',
        database: 'employees'
    },
    console.log("Hi! You're connected to the 'Employees' database.")
);

module.exports = db;