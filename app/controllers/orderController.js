import Order from '../models/order.js'

const OrderController = {
    async index(req, res) {
        try {
            await OrderController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const orders = await Order.findAll()
        res.status(200)
        res.json({
            success: true,
            data: orders
        })
    },
    async show(req, res) {
        try {
            await OrderController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const order = await Order.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: order
        })
    },
    async store(req, res) {
        try {
            await OrderController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const order = await Order.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: order
        })
    },
    async update(req, res) {
        try {
            await OrderController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Order.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const order = await Order.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: order
        })
    },
    async destroy(req, res) {
        try {
            await OrderController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const order = await Order.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: order
        })
    }
}

export default OrderController