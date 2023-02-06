const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	app.post("/api/v1/verify/public", controller.allAccess);

	app.post("/api/v1/user/info", controller.userInfo);

	app.post("/api/v1/user/update", [authJwt.verifyToken], controller.userUpdate);

	app.post("/api/v1/verify/customer", [authJwt.verifyToken], controller.customerBoard);

	app.post("/api/v1/verify/business", [authJwt.verifyToken, authJwt.isBusiness], controller.businessBoard);

	app.post("/api/v1/verify/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.businessBoard);
};
