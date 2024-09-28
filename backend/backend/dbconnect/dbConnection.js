
const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shrey$heshi1745',
    database: 'todolist',
    port: 3306
});

db.connect((error) => {
    if (!error) {
        console.log('MySql connection started');
    } else {
        console.log(error);
    }

})

module.exports = db;