import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';

import CategoryController from '../controllers/categoryController.js';
import InvoiceController from '../controllers/invoiceController.js';
import OrderController from '../controllers/orderController.js';
import PartnerController from '../controllers/partnerController.js';
import PositionController from '../controllers/positionController.js';
import ProductController from '../controllers/productController.js';
import WorkerController from '../controllers/workerController.js';

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)

router.get('/categories', CategoryController.index)
router.get('/categories/:id', CategoryController.show)
router.post('/categories', CategoryController.store)
router.put('/categories/:id', CategoryController.update)
router.delete('/categories/:id', CategoryController.destroy)

router.get('/invoices', InvoiceController.index)
router.get('/invoices/:id', InvoiceController.show)
router.post('/invoices', InvoiceController.store)
router.put('/invoices/:id', InvoiceController.update)
router.delete('/invoices/:id', InvoiceController.destroy)

router.get('/orders', OrderController.index)
router.get('/orders/:id', OrderController.show)
router.post('/orders', OrderController.store)
router.put('/orders/:id', OrderController.update)
router.delete('/orders/:id', OrderController.destroy)

router.get('/partners', PartnerController.index)
router.get('/partners/:id', PartnerController.show)
router.post('/partners', PartnerController.store)
router.put('/partners/:id', PartnerController.update)
router.delete('/partners/:id', PartnerController.destroy)

router.get('/positions', PositionController.index)
router.get('/positions/:id', PositionController.show)
router.post('/positions', PositionController.store)
router.put('/positions/:id', PositionController.update)
router.delete('/positions/:id', PositionController.destroy)

router.get('/products', ProductController.index)
router.get('/products/:id', ProductController.show)
router.post('/products', ProductController.store)
router.put('/products/:id', ProductController.update)
router.delete('/products/:id', ProductController.destroy)

router.get('/workers', WorkerController.index)
router.get('/workers/:id', WorkerController.show)
router.post('/workers', WorkerController.store)
router.put('/workers/:id', WorkerController.update)
router.delete('/workers/:id', WorkerController.destroy)


export default router
