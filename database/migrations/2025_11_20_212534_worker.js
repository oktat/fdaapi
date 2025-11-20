import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('workers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: true  },
    entryDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    positionId: { type: DataTypes.INTEGER,  allowNull: true  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('workers');
}

export { up, down }
