import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('invoices', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    accountNumber: { type: DataTypes.STRING,  allowNull: false  },
    paymentDeadline: { type: DataTypes.DATEONLY,  allowNull: false  },
    partnerId: { type: DataTypes.INTEGER,  allowNull: false  },
    amount: { type: DataTypes.DECIMAL,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('invoices');
}

export { up, down }
