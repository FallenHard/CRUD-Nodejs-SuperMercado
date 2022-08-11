const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Mercado extends Model {}

Mercado.init (
  {
    product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hall: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shelf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "mercado",
    timestamps: true,
  }
)
  


//Cria a tabela
//Mercado.sync();
//Ver se tem alguma alteração na tabela
//Mercado.sync({ alter: true})

module.exports = Mercado;
