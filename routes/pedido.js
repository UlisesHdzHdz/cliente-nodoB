const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController')

router.post('/realizarPedido', pedidoController.realizarPedido)
router.put('/posponerEntrega', pedidoController.posponerEntrega)
router.put('/cambiarEstado', pedidoController.cambiarEstado)
router.put('/asignarPedido', pedidoController.asignarPedido)
router.get('/verDetallePedido/:idPedido', pedidoController.verDetallePedido)
router.get('/verPedidosPorEstado/:estado', pedidoController.verPedidosPorEstado)

module.exports = router;