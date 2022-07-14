import { Sequelize, DataTypes } from 'sequelize';


class Loan {
  private connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('EMPRESTIMO', {
      Codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nro_Exemplar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        key: 'Nro_Exemplar'
      },
      ISBN: {
        type: DataTypes.STRING(12),
        allowNull: false,
        key: 'Nro_Exemplar'
      },
      Codigo_Assoc: {
        type: DataTypes.INTEGER,
        allowNull: false,
        key: 'Codigo_Assoc',
        references: {
          model: 'ASSOCIADO',
          key: 'Codigo'
        }
      },
      Data_Emp: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Data_Devol: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Loan };