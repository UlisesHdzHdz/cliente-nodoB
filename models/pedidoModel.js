const bd = require('../configMySql')

module.exports = {

    realizarPedido: (pedido, callback) => {
        let sql = 'INSERT INTO pedido SET ?'
        console.log(pedido);
        bd.query(sql, pedido, (err, data) => {
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    posponerEntrega: (idPedido, nuevaFecha, callback) => {
        let sql = 'UPDATE pedido SET fechaPedido = ? WHERE idPedido = ?'
        bd.query(sql, [nuevaFecha, idPedido], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    cambiarEstado: (idPedido, nuevoEstado, callback) => {
        let sql = 'UPDATE pedido SET estado = ? WHERE idPedido = ?'
        bd.query(sql, [nuevoEstado, idPedido], (err, data) => {
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    asignarPedido: (idPedido, idRepartidor, callback) => {
        console.log(idPedido, idRepartidor)
        let sql = 'UPDATE pedido SET idRepartidor = ? WHERE idPedido = ?'
        bd.query(sql, [idRepartidor, idPedido], (err, data) => {
            console.log(data)
            if (err) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
    verDetallePedido: (idPedido, callback) => {
        let sql = 'SELECT * FROM pedido WHERE idPedido = ?';
        bd.query(sql, idPedido, (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data[0]);
            }
        });
    },
    verPedidosPorEstado: (estado, callback) => {
        let sql = 'SELECT * FROM pedido WHERE estado = ?';
        bd.query(sql, estado, (err, data) => {
            if (err || data.length === 0) {
                return callback(null);
            } else {
                return callback(data);
            }
        });
    },
}