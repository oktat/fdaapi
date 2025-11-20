import Partner from '../models/partner.js'

const PartnerController = {
    async index(req, res) {
        try {
            await PartnerController.tryIndex(req, res)
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
        const partners = await Partner.findAll()
        res.status(200)
        res.json({
            success: true,
            data: partners
        })
    },
    async show(req, res) {
        try {
            await PartnerController.tryShow(req, res)
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
        const partner = await Partner.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: partner
        })
    },
    async store(req, res) {
        try {
            await PartnerController.tryStore(req, res)
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
        const partner = await Partner.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: partner
        })
    },
    async update(req, res) {
        try {
            await PartnerController.tryUpdate(req, res)
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
        const recordNumber = await Partner.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const partner = await Partner.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: partner
        })
    },
    async destroy(req, res) {
        try {
            await PartnerController.tryDestroy(req, res)
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
        const partner = await Partner.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: partner
        })
    }
}

export default PartnerController