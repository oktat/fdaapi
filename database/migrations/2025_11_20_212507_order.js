import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: { type: DataTypes.DATEONLY,  allowNull: false  },
    partnerId: { type: DataTypes.INTEGER,  allowNull: false  },
    workerId: { type: DataTypes.INTEGER,  allowNull: false  },
    status: { type: DataTypes.STRING,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('orders');
}

export { up, down }
