import Invoice from '../models/invoice.js'

const InvoiceController = {
    async index(req, res) {
        try {
            await InvoiceController.tryIndex(req, res)
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
        const invoices = await Invoice.findAll()
        res.status(200)
        res.json({
            success: true,
            data: invoices
        })
    },
    async show(req, res) {
        try {
            await InvoiceController.tryShow(req, res)
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
        const invoice = await Invoice.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: invoice
        })
    },
    async store(req, res) {
        try {
            await InvoiceController.tryStore(req, res)
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
        const invoice = await Invoice.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: invoice
        })
    },
    async update(req, res) {
        try {
            await InvoiceController.tryUpdate(req, res)
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
        const recordNumber = await Invoice.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const invoice = await Invoice.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: invoice
        })
    },
    async destroy(req, res) {
        try {
            await InvoiceController.tryDestroy(req, res)
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
        const invoice = await Invoice.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: invoice
        })
    }
}

export default InvoiceController