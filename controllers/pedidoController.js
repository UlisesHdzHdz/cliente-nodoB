const pedidoModel = require('../models/pedidoModel')

const realizarPedido = (req, res) => {
    const pedido = {
        idCliente: req.body.idCliente,
        fechaPedido: req.body.fechaPedido,
        direccionEntrega: req.body.direccionEntrega,
        estado: req.body.estado,
        idAdministrador: req.body.idAdministrador
    }
    pedidoModel.realizarPedido(pedido, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Pedido creado exitosamente',
                data: pedido
            })
        } else {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: error
            })
        }
    })
}
const posponerEntrega = (req, res) => {
    fechaAsignada = req.body.fechaAsignada
    idPedido = req.body.idPedido
    pedidoModel.posponerEntrega(idPedido, fechaAsignada, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Fecha propuesta exitosamente',
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: 'Error'
            })
        }
    })
}
const cambiarEstado = (req, res) => {
    estado = req.body.estado
    idPedido = req.body.idPedido
    pedidoModel.cambiarEstado(idPedido, estado, (data) => {
        try {
            res.send({
                status: true,
                message: 'Estado cambiado exitosamente',
                data: data
            })
        } catch (error) {
            res.send({
                status: false,
                message: 'No se pudo actualizar el estado',
                errorMessage: error
            })
        }
    })
}
const asignarPedido = (req, res) => {
    idRepartidor = req.body.idRepartidor
    idPedido = req.body.idPedido
    pedidoModel.asignarPedido(idPedido, idRepartidor, (data) => {
        try {
            res.send({
                status: true,
                message: 'Pedido asigando exitosamente',
                data: data
            })
        } catch (error) {
            res.send({
                status: false,
                message: 'No se pudo asignar el pedido',
                errorMessage: error
            })
        }
    })
}
const verDetallePedido = (req, res) => {
    idPedido = req.params.idPedido
    pedidoModel.verDetallePedido(idPedido, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Se han obtenido los pedidos exitosamente',
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: 'Error'
            })
        }
    })
}
const verPedidosPorEstado = (req, res) => {
    estado = req.params.estado
    pedidoModel.verPedidosPorEstado(estado, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Se han obtenido los pedidos exitosamente',
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: 'Error'
            })
        }
    })
}
module.exports = {
    realizarPedido,
    posponerEntrega,
    cambiarEstado,
    verDetallePedido,
    asignarPedido,
    verPedidosPorEstado
}