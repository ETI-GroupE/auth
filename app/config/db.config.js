// module.exports = {
// 	master: {
// 		HOST: process.env.master,
// 		USER: process.env.user,
// 		PASSWORD: process.env.password,
// 		DB: "db",
// 		dialect: "mysql",
// 		pool: {
// 			max: 5,
// 			min: 0,
// 			acquire: 30000,
// 			idle: 10000,
// 		},
// 	},
// 	replica: {
// 		HOST: process.env.replica,
// 		USER: process.env.user,
// 		PASSWORD: process.env.password,
// 		DB: "db",
// 		dialect: "mysql",
// 		pool: {
// 			max: 5,
// 			min: 0,
// 			acquire: 30000,
// 			idle: 10000,
// 		},
// 	},
// };

module.exports = {
	master: {
		HOST: "localhost",
		USER: "root",
		PASSWORD: "password",
		DB: "auth",
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
	replica: {
		HOST: "localhost",
		USER: "root",
		PASSWORD: "password",
		DB: "auth",
		dialect: "mysql",
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
};
