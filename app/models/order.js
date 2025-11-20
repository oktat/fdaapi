import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Order = sequelize.define('order', {
    date: { type: DataTypes.DATEONLY,  allowNull: false  },
    partnerId: { type: DataTypes.INTEGER,  allowNull: false  },
    workerId: { type: DataTypes.INTEGER,  allowNull: false  },
    status: { type: DataTypes.STRING,  allowNull: false  }
})

export default Order
