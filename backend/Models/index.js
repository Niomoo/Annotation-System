const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: false
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./userModel.js")(sequelize, Sequelize);
db.documents = require("./documentModel.js")(sequelize, Sequelize);
db.entities = require("./entityModel.js")(sequelize, Sequelize);
db.identifiers = require("./identifierModel.js")(sequelize, Sequelize);

// OR-Mapping place
db.documents.hasMany(db.entities, { as: "EntityList" });
db.entities.belongsTo(db.documents, {
  foreignKey: "documentId",
  as: "Document",
});

db.identifiers.hasMany(db.entities, { as: "EntityList" });
db.entities.belongsTo(db.identifiers, {
  foreignKey: "identifierId",
  as: "Identifier",
});


module.exports = db;