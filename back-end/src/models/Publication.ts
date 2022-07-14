import { Sequelize, DataTypes } from 'sequelize';


class Publication {
  private connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('PUBLICACAO', {
      ISBN: {
        type: DataTypes.STRING(12),
        allowNull: false,
        primaryKey: true,
      },
      Titulo: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      Autor: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      Editora: {
        type: DataTypes.STRING(30),
        allowNull: false,
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Publication };