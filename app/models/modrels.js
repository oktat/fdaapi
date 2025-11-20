import User from './user.js';
// import sequelize from '../database/database.js'
import Category from './category.js';
import Invoice from './invoice.js';
import Order from './order.js';
import Partner from './partner.js';
import Position from './position.js';
import Product from './product.js';
import Worker from './worker.js';

const db = {};

db.User = User;
db.Category = Category;
db.Invoice = Invoice;
db.Order = Order;
db.Partner = Partner;
db.Position = Position;
db.Product = Product;
db.Worker = Worker;

// await sequelize.sync({ alter: false })

export default db;
