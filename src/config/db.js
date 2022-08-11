const Sequelize = require("sequelize");

const sequelize = new Sequelize("mercado", "root", "joaovmd789", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão com banco de dados realizada com sucesso");
  })
  .catch(function () {
    console.log("Erro conexão com banco de dados");
  });

module.exports = sequelize;
