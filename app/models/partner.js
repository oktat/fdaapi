import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Partner = sequelize.define('partner', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    taxNumber: { type: DataTypes.STRING,  allowNull: false  },
    contactPerson: { type: DataTypes.STRING,  allowNull: false  },
    type: { type: DataTypes.STRING,  allowNull: false  }
})

export default Partner
