import Worker from '../models/worker.js'

const WorkerController = {
    async index(req, res) {
        try {
            await WorkerController.tryIndex(req, res)
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
        const workers = await Worker.findAll()
        res.status(200)
        res.json({
            success: true,
            data: workers
        })
    },
    async show(req, res) {
        try {
            await WorkerController.tryShow(req, res)
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
        const worker = await Worker.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: worker
        })
    },
    async store(req, res) {
        try {
            await WorkerController.tryStore(req, res)
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
        const worker = await Worker.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: worker
        })
    },
    async update(req, res) {
        try {
            await WorkerController.tryUpdate(req, res)
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
        const recordNumber = await Worker.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const worker = await Worker.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: worker
        })
    },
    async destroy(req, res) {
        try {
            await WorkerController.tryDestroy(req, res)
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
        const worker = await Worker.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: worker
        })
    }
}

export default WorkerController