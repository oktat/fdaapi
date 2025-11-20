import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('partners', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    taxNumber: { type: DataTypes.STRING,  allowNull: false  },
    contactPerson: { type: DataTypes.STRING,  allowNull: false  },
    type: { type: DataTypes.STRING,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('partners');
}

export { up, down }
