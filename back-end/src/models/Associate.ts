import { Sequelize, DataTypes, Model } from 'sequelize';


class Associate {
  connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('ASSOCIADO', {
      Codigo: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true
      },
      Nome: {
        type: DataTypes.STRING(35),
        allowNull: false
      },
      Endereco: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      Status: {
        type: DataTypes.ENUM('Grad', 'PosGrad', 'Prof'),
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Associate };