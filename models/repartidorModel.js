const bd = require('../configMySql')

module.exports = {

    registrarRepartidor: (repartidor, callback) => {
        let sql = 'INSERT INTO repartidor SET ?'
        console.log(repartidor);
        bd.query(sql, repartidor, (err, data) => {
            console.log(err)
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    obtenerRepartidores: (callback) => {
        let sql = 'SELECT * FROM repartidor';
        bd.query(sql, (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    verPedidosRepartidor: (idRepartidor, callback) => {
        let sql = 'SELECT * FROM pedido WHERE idRepartidor = ?';
        bd.query(sql, idRepartidor, (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
}