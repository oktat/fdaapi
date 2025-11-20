import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Product = sequelize.define('product', {
    articleName: { type: DataTypes.STRING,  allowNull: false  },
    name: { type: DataTypes.STRING,  allowNull: false  },
    unitPrice: { type: DataTypes.DECIMAL,  allowNull: false  },
    categoryId: { type: DataTypes.INTEGER,  allowNull: false  }
})

export default Product
