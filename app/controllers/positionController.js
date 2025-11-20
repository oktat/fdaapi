import Position from '../models/position.js'

const PositionController = {
    async index(req, res) {
        try {
            await PositionController.tryIndex(req, res)
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
        const positions = await Position.findAll()
        res.status(200)
        res.json({
            success: true,
            data: positions
        })
    },
    async show(req, res) {
        try {
            await PositionController.tryShow(req, res)
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
        const position = await Position.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: position
        })
    },
    async store(req, res) {
        try {
            await PositionController.tryStore(req, res)
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
        const position = await Position.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: position
        })
    },
    async update(req, res) {
        try {
            await PositionController.tryUpdate(req, res)
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
        const recordNumber = await Position.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const position = await Position.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: position
        })
    },
    async destroy(req, res) {
        try {
            await PositionController.tryDestroy(req, res)
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
        const position = await Position.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: position
        })
    }
}

export default PositionController