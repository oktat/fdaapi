import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Position = sequelize.define('position', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Position
