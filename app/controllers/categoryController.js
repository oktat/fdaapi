import Category from '../models/category.js'

const CategoryController = {
    async index(req, res) {
        try {
            await CategoryController.tryIndex(req, res)
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
        const categorys = await Category.findAll()
        res.status(200)
        res.json({
            success: true,
            data: categorys
        })
    },
    async show(req, res) {
        try {
            await CategoryController.tryShow(req, res)
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
        const category = await Category.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: category
        })
    },
    async store(req, res) {
        try {
            await CategoryController.tryStore(req, res)
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
        const category = await Category.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: category
        })
    },
    async update(req, res) {
        try {
            await CategoryController.tryUpdate(req, res)
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
        const recordNumber = await Category.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const category = await Category.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: category
        })
    },
    async destroy(req, res) {
        try {
            await CategoryController.tryDestroy(req, res)
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
        const category = await Category.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: category
        })
    }
}

export default CategoryController