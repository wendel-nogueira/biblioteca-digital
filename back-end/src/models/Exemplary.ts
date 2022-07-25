import { Sequelize, DataTypes } from 'sequelize';


class Exemplary {
  private connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('EXEMPLAR', {
      Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      ISBN: {
        type: DataTypes.STRING(12),
        allowNull: false,
        primaryKey: true,
        key: 'ISBN',
        references: {
          model: 'PUBLICACAO',
          key: 'ISBN'
        }
      },
      Preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    }, {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Exemplary };