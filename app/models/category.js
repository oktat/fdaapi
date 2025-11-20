import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Category = sequelize.define('category', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Category
