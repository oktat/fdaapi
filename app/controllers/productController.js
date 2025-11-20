import Product from '../models/product.js'

const ProductController = {
    async index(req, res) {
        try {
            await ProductController.tryIndex(req, res)
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
        const products = await Product.findAll()
        res.status(200)
        res.json({
            success: true,
            data: products
        })
    },
    async show(req, res) {
        try {
            await ProductController.tryShow(req, res)
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
        const product = await Product.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: product
        })
    },
    async store(req, res) {
        try {
            await ProductController.tryStore(req, res)
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
        const product = await Product.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: product
        })
    },
    async update(req, res) {
        try {
            await ProductController.tryUpdate(req, res)
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
        const recordNumber = await Product.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const product = await Product.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: product
        })
    },
    async destroy(req, res) {
        try {
            await ProductController.tryDestroy(req, res)
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
        const product = await Product.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: product
        })
    }
}

export default ProductController