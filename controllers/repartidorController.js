const repartidorModel = require('../models/repartidorModel')

const registrarRepartidor = (req, res) => {
    const repartidor = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    }
    repartidorModel.registrarRepartidor(repartidor, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Cliente creado exitosamente',
                data: repartidor
            })
        } else {
            res.send({
                status: false,
                message: 'Verifique si los datos están completos',
                errorMessage: data
            })
        }
    })
}
const verPedidosRepartidor = (req, res) => {
    idRepartidor = req.params.idRepartidor
    repartidorModel.verPedidosRepartidor(idRepartidor, (data) => {
        if (data != null) {
            res.send({
                status: true,
                message: 'Pedidos del repartidor obtenidos correctamente',
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'No hay pedidos aún',
                errorMessage: data
            })
        }
    })
}
const obtenerRepartidores = (req, res) => {
    repartidorModel.obtenerRepartidores((data) => {
        if (data == null) {
            res.send({
                status: false,
                message: 'No hay repartidores creados',
                data: data
            })
        } else {
            res.send({
                status: true,
                message: 'Repartidores obtenidos exitosamente',
                data: data
            })
        }
    }, err => {
        res.send({
            status: false,
            message: 'Ha ocurrido un error al ver los repartidores',
            errorMessage: err
        })
    })
}
module.exports = {
    registrarRepartidor,
    obtenerRepartidores,
    verPedidosRepartidor
}