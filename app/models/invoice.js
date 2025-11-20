import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Invoice = sequelize.define('invoice', {
    accountNumber: { type: DataTypes.STRING,  allowNull: false  },
    paymentDeadline: { type: DataTypes.DATEONLY,  allowNull: false  },
    partnerId: { type: DataTypes.INTEGER,  allowNull: false  },
    amount: { type: DataTypes.DECIMAL,  allowNull: false  }
})

export default Invoice
