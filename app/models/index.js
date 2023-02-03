const dbconfig = require("../config/db.config.js");
const masterConfig = dbconfig.master;
const replicaConfig = dbconfig.replica;

const Sequelize = require("sequelize");
const sequelize = new Sequelize(masterConfig.DB, masterConfig.USER, masterConfig.PASSWORD, {
	dialect: masterConfig.dialect,
	operatorsAliases: false,
	replication: {
		read: [{ host: replicaConfig.HOST }],
		write: { host: masterConfig.HOST },
	},
	pool: {
		max: masterConfig.pool.max,
		min: masterConfig.pool.min,
		acquire: masterConfig.pool.acquire,
		idle: masterConfig.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
	through: "user_roles",
	foreignKey: "roleId",
	otherKey: "userId",
});
db.user.belongsToMany(db.role, {
	through: "user_roles",
	foreignKey: "userId",
	otherKey: "roleId",
});

db.ROLES = ["customer", "business"];

module.exports = db;
