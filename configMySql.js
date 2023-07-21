const mysql = require('mysql');

const config = {
    host : '3.19.27.190',
    user : 'manu',
    database: 'basedatos',
    password: 'password',
};

const conn = mysql.createConnection(config);

conn.connect(function(err) {
    if (err) throw err;
    console.log('Conexión establecida');
});

module.exports = conn;