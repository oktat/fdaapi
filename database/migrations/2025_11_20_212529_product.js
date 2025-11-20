import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    articleName: { type: DataTypes.STRING,  allowNull: false  },
    name: { type: DataTypes.STRING,  allowNull: false  },
    unitPrice: { type: DataTypes.DECIMAL,  allowNull: false  },
    categoryId: { type: DataTypes.INTEGER,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('products');
}

export { up, down }
