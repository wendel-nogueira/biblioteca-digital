import { Sequelize, DataTypes } from 'sequelize';


class Employee {
  connect: Sequelize;

  constructor(sequelize: Sequelize) {
    this.connect = sequelize;
  }

  init() {
    return this.connect.define('FUNCIONARIO', {
      Codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nome: {
        type: DataTypes.STRING(35),
        allowNull: false
      },
      Funcao: {
        type: DataTypes.ENUM('gerente', 'funcionario'),
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      Senha: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });
  }
}


export { Employee };