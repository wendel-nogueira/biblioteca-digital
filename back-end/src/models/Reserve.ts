import { Sequelize, DataTypes } from 'sequelize';


class Reserve {
  connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('RESERVA', {
      Codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ISBN: {
        type: DataTypes.STRING(12),
        allowNull: false,
        key: 'ISBN',
        references: {
          model: 'PUBLICACAO',
          key: 'ISBN'
        }
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
      Data: {
        type: DataTypes.DATE,
        allowNull: false
      },
      Status: {
        type: DataTypes.ENUM('Iniciado', 'Avisado', 'Anulado'),
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Reserve };