const mysql = require('mysql2');

const dbConfig = {
    host: "sqlclassdb-instance-1.cqjxl5z5vyvr.us-east-2.rds.amazonaws.com",
    port: 3306,
    user: "faisay25",
    password: "BnQVGYJ9mRyU",
    database: "webapp_p8_2223t2_faisay25",
    connectTimeout: 10000
}

const connection = mysql.createConnection(dbConfig);

module.exports = connection;