import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Worker = sequelize.define('worker', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: true  },
    entryDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    positionId: { type: DataTypes.INTEGER,  allowNull: true  }
})

export default Worker
