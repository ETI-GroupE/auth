module.exports = {
	HOST: "34.162.74.212",
	USER: "root",
	PASSWORD: "password",
	DB: "db",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
